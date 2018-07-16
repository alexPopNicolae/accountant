import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/CategoriesComponent/categories.component';
import { WelcomeComponent } from './components/WelcomeComponent/welcome.component';
import { ProductsComponent } from './components/ProductsComponent/products.component';
import { InvoicesComponent } from './components/InvoicesComponent/invoices.component';
import { ProductsServices } from './services/products.service';
import { CategoriesServices } from './services/categories.service';
import { CategoryTree } from './sharedComponents/CategoryTree/category-tree.component';
import { InvoicesService } from './services/invoices.service';
import { InvoiceDetails } from './components/InvoiceDetailsComponent/invoice-details.component';
import { InvoicesClientsComponent } from './components/InvoicesClients/invoices-clients.component';
import { InvoicesList } from './sharedComponents/InvoicesList/invoices.component';
import { InvoicesClientsService } from './services/invoicesclients.service';
import { InvoicesListDetalsComponent } from './sharedComponents/InvoicesListDetails/invoices-list-details.component';
import { ClientProductsComponent } from './components/ClientProducts/client-products.component';
import { OperationsComponent } from './sharedComponents/OperationsComponent/operations.component';
import { ProductClient } from './services/productclients.service';

const routes = [
  { path: '', component: WelcomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'invoicedetails/:id', component: InvoiceDetails },
  { path: 'invoicesclients', component: InvoicesClientsComponent },
  { path: 'productsclients', component: ClientProductsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    WelcomeComponent,
    ProductsComponent,
    InvoicesComponent,
    CategoryTree,
    InvoiceDetails,
    InvoicesClientsComponent,
    InvoicesList,
    InvoicesListDetalsComponent,
    ClientProductsComponent,
    OperationsComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes, { useHash: true }), FormsModule],
  providers: [ProductsServices, CategoriesServices, InvoicesService, InvoicesClientsService, ProductClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
