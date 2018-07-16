import { Component, OnInit } from '@angular/core';
import { ProductClient } from '../../services/productclients.service';

@Component({
  selector: 'app-client-products',
  templateUrl: './client-products.component.html',
  styleUrls: ['./client-products.component.scss']
})
export class ClientProductsComponent implements OnInit {
  constructor(private productClient: ProductClient) {}
  products;

  ngOnInit() {
    console.log('Astea sunt produsele noastre: ');
    console.log(this.productClient.getProducts());
    this.products = this.productClient.getProducts();
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
}
