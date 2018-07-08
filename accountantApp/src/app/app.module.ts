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

const routes = [
  {path:'', component:WelcomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'invoices', component:InvoicesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    WelcomeComponent,
    ProductsComponent,
    InvoicesComponent,
    CategoryTree
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash:true}),
    FormsModule
  ],
  providers: [
    ProductsServices,
    CategoriesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
