import { Component } from '@angular/core';


@Component ({
  selector: 'app-root',
  template: `
  <h1>Hola mundo!</h1>
  <app-home></app-home>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})

export class AppComponent {
  //title = 'mu-app-angular';
  title = 'homes';
}
