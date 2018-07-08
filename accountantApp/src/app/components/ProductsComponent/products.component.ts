import { Component, OnInit } from "@angular/core";
import { ProductsServices } from "../../services/products.service";

@Component({
    selector:'app-products',
    templateUrl:'products.component.html',
    styleUrls:['./products.component.scss']
    
})
export class ProductsComponent  implements OnInit {
    constructor(private productsServices:ProductsServices) {}
    
    public products;
    public categories;
    public newProductName;
    public selectedNewProductCategory;
    public updateProductName;
    public selectedUpdatedProductCategory;
    public updateProductCode;

    public ngOnInit() {
        this.products = this.productsServices.getProducts();
        this.categories = this.productsServices.getCategories();
        this.selectedNewProductCategory = this.categories[0].id;
    }

    public handleClickedProduct(e) {
        const id = e.target.id;
        this.productsServices.toggleSelection(id);
    }

    public clearSelectedFiles() {
       this.productsServices.clearSelectedFiles();
    }

    public addNewProduct() {
        const uniqId = new Date();
        const product = {
            code: uniqId.getTime(),
            name:this.newProductName,
            categoryId:this.selectedNewProductCategory,
            isDeleted:false,
            isSelected:false
        };
        this.productsServices.addProduct(product);
        this.newProductName="";
        this.products = this.productsServices.getProducts();
    }

    public onOptionChange(option) {
        this.selectedNewProductCategory = option;
    }

    public deleteAllSelected() {
        this.productsServices.deleteAllSelectedProducts();
        this.products = this.productsServices.getProducts();

    }

    public deleteRowProduct(productCode) {
       this.productsServices.deleteProductRow(productCode);
       this.products = this.productsServices.getProducts();
    }
   
    public editProduct(productCode) {
       const product = this.productsServices.getProduct(productCode);
        this.updateProductName = product.name;
        this.selectedUpdatedProductCategory = product.categoryId;
        this.updateProductCode = productCode;
       
    }

    public onUpdateOptionChange(option) {
        this.selectedUpdatedProductCategory = option;
    }

    public updateProduct() {
        const updatedProduct = {
            code:this.updateProductCode,
            name:this.updateProductName,
            categoryId:this.selectedUpdatedProductCategory
        };
        this.productsServices.updateProduct(updatedProduct);
        this.products = this.productsServices.getProducts();
    }
}