import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : String = 'Todo App';

  showTodos = true;
  

  toggleHeroes() { this.showTodos = !this.showTodos; }
 
}
