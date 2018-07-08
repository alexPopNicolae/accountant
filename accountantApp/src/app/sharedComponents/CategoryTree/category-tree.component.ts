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
    public newSubCategoryName;
    public code;
    public modalVisible = false;
    public addSubCategoryModalVisible = false;
    public addNewSubcategoryModal;
   

    public deleteCategory(code) {
        this.categoriesService.deleteCategory(code);
    }

    public editCategory(code, name) {
        this.code = code;
        this.newSubCategoryName = name;
        this.modalVisible = true;
    }
    public closeModal() {
        this.modalVisible = false;
    }

    public saveChanges() {
        this.categoriesService.editCategory(this.code, this.newSubCategoryName);
        this.modalVisible = false;
    }

    public openAddSubCategoryModal(code) {
        this.addSubCategoryModalVisible = true;
        this.code = code;
    }

    public closeAddSubcategoryModal() {
        this.addSubCategoryModalVisible = false;
    }

    public saveSubcategoryChanges() {
        this.addSubCategoryModalVisible = false;
        this.categoriesService.saveSubCategory(this.code, this.addNewSubcategoryModal);
        this.addNewSubcategoryModal = "";
    }

}