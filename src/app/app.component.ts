import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tasks';
  upperText: string = "texto em uppercase";
  lowerText: string = "TEXTO EM LOWERCASE"
  percentValue: number = 0.5;
  date: Date = new Date();
  money: number = 598;
  isAdmin:boolean = true;
  profile:number = 3; 
  user: User = {
    name: "Paulo",
    age: 25
  }
}
