import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todoService';
import { Todo } from '../model/Todo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { updateTodos } from '../model/updateTodo';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  todo: Todo; todos : Todo[]; editTodo: Todo;
   newTodo: Todo; oldTodo : Todo; updateTodos : Todo[];


  constructor(private todoService : TodoService,
    private http: HttpClient,
   
  
    ) { }


  ngOnInit() {
    
  }


  getTodoList(){

    return this.todoService.todoList()
      .subscribe((response) => {
        this.todos = response;
      },
      error => console.error(error)
      );
  }

 
  deleteTodo(todo): void {
   
    this.todoService.deleteTodo(todo).subscribe();
  }
    /*
    // oops ... subscribe() is missing so nothing happens
    this.heroesService.deleteHero(hero.id);
    */

  edit(todo){
   // console.log("click button called");
     this.oldTodo = Object.assign({},todo);
    this.editTodo=todo;  // I took out this line thats why update is not called 
    
  //  console.log("the current todo" + this.oldTodo.subject);
  }
  updateTodo(){
   
  //  console.log("update function called");
    //console.log("old Todo" +this.oldTodo.subject);
   // console.log("new Todo"+this.editTodo.subject);

    var oldsubject = this.oldTodo.subject;
    var newSubject = this.editTodo.subject;
    var oldCategory = this.oldTodo.category;
    var newCategory = this.editTodo.category;
    var newStatus = this.editTodo.status;
    var input1; input1= oldsubject + `-` + oldCategory + `-` + newSubject + `-` + newCategory   + `-` +  newStatus;
   

  this.todoService.updateTodo(input1).subscribe();
  }
  
/* optional
  search(searchTerm: string) {
    this.editTodo = undefined;
    if (searchTerm) {
      this.todoService.searchTodos(searchTerm)
        .subscribe(todos => this.todos = todos);
    }
  }
*/
}
