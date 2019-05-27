import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs'
import { catchError, tap, map } from 'rxjs/operators';

import { Todo } from '../model/Todo';
import { stringify } from '@angular/compiler/src/util';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Category } from '../model/category';
import { updateTodos } from '../model/updateTodo';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrlList = "localhost:9000/Todo";
const apiUrlCreate = "http://localhost:3000/Todo/create";


@Injectable({
  providedIn: 'root'
})
export class TodoService {
    
  todos: Todo[]; 

  constructor(private http: HttpClient) { }
  

  addtodo (todo: Todo): Observable<Todo> {
 
    return this.http.post<Todo>(`http://localhost:3000/Todo/create`, todo, httpOptions)
      .pipe(
        //catchError(this.handleError('addtodo', todo))
      );
  }

  update (string : Todo): Observable<Todo> {

    
    return this.http.post<Todo>(`http://localhost:3000/Todo/subject/:subject/category/:category`, httpOptions)
      .pipe(
        //catchError(this.handleError('addtodo', todo))
      );
  }

  addTodo(todo: Todo){
    
    //console.log("add to do initiated");

    const bodyData = {
      "subject": todo.subject,
      "status": todo.status,
      "category": todo.category
    }
    
   // console.log(bodyData.subject);
   // console.log(bodyData.status);
   // console.log(bodyData.category);
  
    //take the body variables assign to an object and return that todo object
    return this.http.post(apiUrlCreate,bodyData);

  }



  /** DELETE: delete the todo from the server */
  deleteTodo (todo: Todo): Observable<{}> {
 
    var subject; subject = todo.subject;
    var category; category = todo.category;
    var input; input = subject + `-` + category;
    return this.http.delete<Todo>(`http://localhost:3000/Todo/${input}` 
                          ,httpOptions);
    
  }
  deleteCategory (category: Category): Observable<{}> {
 
    var name; name = category.name;
    return this.http.delete<Category>(`http://localhost:3000/Category/${name}` 
                          ,httpOptions);
    
  }



  updateTodo(input1){
  
  
    return this.http.put(`http://localhost:3000/Todo/${input1}`, httpOptions);
  }

  todoList(){
    //take the list of todo and return the list
    return this.http.get<Todo[]>('http://localhost:3000/Todo');
  }
  CategoryList(){
    //take the list of catergoeis and return the list
    return this.http.get<Category[]>('http://localhost:3000/Category');
  }


/*
  setCreatedDate(): Observable<string> {
    return of(new Date().toLocaleString());
  }
*/

//need to edit the following code
/*
searchTodos(term: string): Observable<Todo[]> {
  term = term.trim();

  // Add safe, URL encoded search parameter if there is a search term
  const options = term ?
   { params: new HttpParams().set('name', term) } : {};

  return this.http.get<Todo[]>(this.heroesUrl, options)
    .pipe(
      catchError(this.handleError<Todo[]>('searchHeroes', []))
    );
}
 */


private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

 
 
}