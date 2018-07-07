import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CommentsComponent } from './comments/comments/comments.component';
import { CommentService } from 'src/app/comments/comment.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
