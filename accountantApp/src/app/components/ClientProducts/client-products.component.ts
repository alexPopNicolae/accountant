import { Component, OnInit } from '@angular/core';
import { ProductClient } from '../../services/productclients.service';

@Component({
  selector: 'app-client-products',
  templateUrl: './client-products.component.html',
  styleUrls: ['./client-products.component.scss']
})
export class ClientProductsComponent implements OnInit {
  constructor(private productClientService: ProductClient) {}
  products;
  modalVisible = false;
  currentOpenedProduct;
  productName = 'test1';
  productCategory = 'category1';
  productDeliverer = 'oncos';
  productDescription = 'o simpla descriere';
  currentNotes;

  ngOnInit() {
    this.products = this.productClientService.getProducts();
  }

  handleAddProduct(e) {
    console.log(e);
  }

  handleEditProduct(e) {
    console.log(e);
  }

  handleDeleteProduct(e) {
    console.log(e);
  }

  handleElementClick(id) {
    this.modalVisible = true;
    this.getDataForProduct(id);
  }

  getDataForProduct(id) {
    this.currentOpenedProduct = id;
    const product = this.productClientService.getProduct(id);
    this.productName = product.denumire;
    this.productCategory = product.categorie;
    this.productDeliverer = product.furnizor;
    this.productDescription = product.descriere;
    this.currentNotes = product.notes;
  }

  closeProductsModal() {
    this.modalVisible = false;
  }
}
