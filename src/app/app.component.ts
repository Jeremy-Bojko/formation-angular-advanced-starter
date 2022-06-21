import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formation-angular-advanced-starter';
  private testPrivate = 'Ceci n\'est pas accessible dans le template'; 
  check() {
    console.log("CD APP");
  }
}
