import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent  {
  tasks = [];
  task = "";
  isAdmin = true;
  profile:number = 2; 
  add():void{
   this.tasks.push(this.task);
  }

}
