import { Comment } from './comments/comment.modelo';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:Http) { }

  getComments(): Observable<Comment[]>{
   return this.http.get('https://jsonplaceholder.typicode.com/comments').pipe(map(response => response.json()));
  }
}
