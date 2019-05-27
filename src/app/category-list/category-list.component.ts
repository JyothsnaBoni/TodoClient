import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { TodoService } from '../services/todoService';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category: Category; categories : Category[]; editCategory: Category;

  constructor(private todoService : TodoService,
    private http: HttpClient,
    ) { }


  ngOnInit() {
    
  }


  CategoryList(){

    return this.todoService.CategoryList()
      .subscribe((response) => {
        this.categories = response;
      },
      error => console.error(error)
      );
  }

  deleteCategory(category): void {
   
    this.todoService.deleteCategory(category).subscribe();
  }

}


/* delete category
  delete(category: Category): void {
    this.categories = this.categories.filter(t => t !== category);
    this.todoService.deleteCategory(category.name).subscribe();
  
    // oops ... subscribe() is missing so nothing happens
    //this.heroesService.deleteHero(hero.id);
    
  }

  edit(category) {
    this.editCategory = category;
  }
  
*/