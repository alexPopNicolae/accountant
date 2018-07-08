import { Injectable } from "@angular/core";


@Injectable()
export class ProductsServices {

private categories = [
    {
        id:1,
        name:'Operating Systems',
    },
    {
        id:2,
        name:'Movies',
    },
    {
        id:3,
        name:'Games'
    }
];    

private products = [
        {
            code:1234,
            name:'Windows 7 Ultimate',
            categoryId:1,
            isDeleted:false,
            isSelected:false
        },
        {
            code:2345,
            name:'Windows 10',
            categoryId:1,
            isDeleted:false,
            isSelected:false
        },
        {
            code:3456,
            name:'Windows 95',
            categoryId:1,
            isDeleted:false,
            isSelected:false
        },
        {
            code:7890,
            name:'Friends - full movies',
            categoryId:2,
            isDeleted:false,
            isSelected:false
        },
        {
            code:8902,
            name:'The return of Dracula - part 1',
            categoryId:2,
            isDeleted:false,
            isSelected:false
        },
        {
            code:9026,
            name:'The return of Dracula - part 2',
            categoryId:2,
            isDeleted:false,
            isSelected:false
        },
        {
            code:9027,
            name:'Warcraft',
            categoryId:3,
            isDeleted:false,
            isSelected:false
        },
        {
            code:82345,
            name:'Starcratft',
            categoryId:3,
            isDeleted:false,
            isSelected:false
        },
        {
            code:99999,
            name:'Age of Empires',
            categoryId:3,
            isDeleted:false,
            isSelected:false
        }
];

public getCategories() {
    return this.categories;
}

public getProducts () {
    const visibleProducts = this.products.filter((product)=> {
        return product.isDeleted == false;
    });
    return visibleProducts;
}

public getProduct(code) {
    let foundProduct;
    this.products.forEach((product)=> {
        if(product.code==code) {
            foundProduct = product;
            return;
        }
    });
    return foundProduct;
}

public toggleSelection(id) {
    this.products.forEach((product)=>{
        const selectionStatus = !product.isSelected;
        if(product.code == id) {
            product.isSelected = selectionStatus;
        }
    });
}

public clearSelectedFiles() {
    this.products.forEach((product) => {
        product.isSelected = false;
    });
}

public addProduct(product) {
    this.products.unshift(product);
}

public deleteAllSelectedProducts() {
    this.products.forEach((product)=>{
        if(product.isSelected) {
            product.isDeleted = true;
            product.isSelected=false;
        } 
    });
}

public deleteProductRow(productRow) {
    this.products.forEach((product)=>{
        if(product.code == productRow) {
            product.isDeleted = true;
        }
    });
}

public updateProduct(newProduct) {
    const code = newProduct.code;
    this.products.forEach((product)=> {
        if(product.code == code) {
            product.name = newProduct.name;
            product.categoryId = newProduct.categoryId;
        }
    });
}

}