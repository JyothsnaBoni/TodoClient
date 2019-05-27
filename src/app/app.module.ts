import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CategoryListComponent } from './category-list/category-list.component';




@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    DeleteTodoComponent,
    UpdateTodoComponent,
    TodoListComponent,
    CategoryListComponent
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
