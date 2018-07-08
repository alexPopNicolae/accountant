import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class CategoriesServices {
    private categories = [
        {
            code:1,
            name:'Masini',
            children:[
                {
                    code:12,
                    name:'Audi'
                },
                {
                    code:13,
                    name:'Dacia',
                    children:[
                        {
                        code:121,
                        name:'Logan'
                        },
                        {
                        code:122,
                        name:'Sandero'
                        }
                    ]
                },
                {
                    code:14,
                    name:'Alfa Romeo'
                },
            ]
        },
        {
            code:3,
            name:'Carti',
            children:[
                {
                    code:31,
                    name:'Fictiune'
                },
                {
                    code:32,
                    name:'Drama'
                },
                {
                    code:33,
                    name:'Politist'
                },
                {
                    code:34,
                    name:'Dragoste'
                }
            ]
        }
    ];

    public reloadCategories: EventEmitter<any> = new EventEmitter();

    public getCategories() {
        return this.categories;
    }

    public addCategory(category) {
        this.categories.unshift(category);
    }

    public deleteCategory(code) {
      this.categories = this.checkSubcategory(code, this.categories);
      this.reloadCategories.emit('reload-categories');
    }

    private checkSubcategory(code, children) {
        const filter = children.filter((element)=>{
            if(element.children) {
                element.children = this.checkSubcategory(code, element.children);
            }
            return element.code != code;
        })
        return filter;
        
    }
    public editCategory(code, newName) {
        this.findCategoryAndUpdate(code, this.categories, newName);
    }

    private findCategoryAndUpdate(code, children, newName) {
        children.forEach((element)=> {
            if(element.code==code) {
                element.name = newName;
            }
            if(element.children) {
                this.findCategoryAndUpdate(code, element.children, newName);
            }
        });
    }

    public saveSubCategory(code, subCategoryName) {
        this.findCategoryAndAddSubcategory(code, this.categories, subCategoryName);
    }

    private findCategoryAndAddSubcategory(code, children, subCategoryName) {
        const uniq = new Date();
        const subCategory = {
            code:uniq.getTime(),
            name:subCategoryName
        };
        children.forEach((element)=> {
            if(element.code == code) {
                if(element.children) {
                    element.children.unshift(subCategory);
                } else {
                    element.children = [];
                    element.children.unshift(subCategory);
                }
            } else {
                if(element.children) {
                    this.findCategoryAndAddSubcategory(code, element.children, subCategoryName);
                }
            }
            
        })
    }
}