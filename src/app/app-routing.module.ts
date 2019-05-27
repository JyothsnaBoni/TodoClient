import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';

const routes: Routes = [

    
  { path: 'addTodo', component: TodoFormComponent },
  { path: 'listTodo', component: TodoListComponent},
  { path: 'editTodo', component: UpdateTodoComponent},
  { path: 'deleteTodo', component: DeleteTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
