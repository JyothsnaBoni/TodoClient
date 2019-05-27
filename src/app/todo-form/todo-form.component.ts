import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FormControl, FormBuilder, NgForm } from '@angular/forms';
import { Todo } from '../model/Todo';
import { TodoService } from '../services/todoService';
import { getLocaleDateTimeFormat } from '@angular/common';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
 
const todo = new Todo();

@Component({
  selector: 'app-todo-form', 
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  // model = new Todo('','','');
  model: any = { };

  myOptions = [
    {id: "done", name: "done"},
    {id: "open", name: "open"},
    
  ];

  submitted = false;
  // onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  //todo: any = {};

  newTodo() {
    this.model = new Todo();
   }
  

   ngOnInit() {
      
  }

  @ViewChild('form') todoForm: NgForm;

  constructor(private form: FormBuilder,
    private todoService: TodoService,
    ) {   }

  onSubmit(){
  
  this.submitted = true;   
    
  //console.log();

   this.todoService.addtodo(this.todoForm.value).subscribe();
      
    
  }
  

}
