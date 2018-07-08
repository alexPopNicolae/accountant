import { Component, Input, OnInit, Output } from "@angular/core";
import { CategoriesServices } from "../../services/categories.service";

@Component({
    selector:'app-category-tree',
    templateUrl:'./category-tree.component.html',
    styleUrls:['./category-tree.component.scss']
})
export class CategoryTree {
    constructor(private categoriesService:CategoriesServices) {}

    @Input() data;
   

    public deleteCategory(code) {
        this.categoriesService.deleteCategory(code);
    }
}