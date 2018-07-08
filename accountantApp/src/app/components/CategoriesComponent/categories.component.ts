import { Component, OnInit } from "@angular/core";
import { CategoriesServices } from "../../services/categories.service";

@Component({
    selector:'app-categories',
    templateUrl:'./categories.component.html',
    styleUrls:['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
    constructor(private categorySerices:CategoriesServices) {}

    public categories;
    public newCategoryName="";
    public newCategoryId;

    ngOnInit(): void {
        this.categories = this.categorySerices.getCategories();
        this.categorySerices.reloadCategories.subscribe(data=>{
            this.categories = this.categorySerices.getCategories();
        });
    }

    public addNewCategory() {
        if(this.newCategoryName!="") {
        const date = new Date();
        const uniq = date.getTime();
        const category = {
            code:uniq,
            name:this.newCategoryName
        };
        this.categorySerices.addCategory(category);
        this.newCategoryName="";
    }
    }


}