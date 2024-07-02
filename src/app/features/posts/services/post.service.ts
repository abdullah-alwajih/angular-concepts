import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost, ResponseType} from "../models/posts.model";
import {catchError, map, Subject, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = 'https://angular-concepts-1568a-default-rtdb.firebaseio.com';
  endPoint = `${this.baseUrl}/posts.json`;
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  getList() {
    return this.http.get<ResponseType>(this.endPoint).pipe(
      map(response => {
        if (!response) return [];
        return Object.keys(response).map(key => ({...response[key], id: key}));
      }),
      catchError(error => {
          throw  error.error.error
      })
    );
  }

  create(post: IPost) {
     this.http.post(this.endPoint, post).subscribe({
      next: response => console.log(response),
      error: error => this.error.next(error.error.error),
    });
  }

  delete(id?: string) {
    return this.http.delete(this.endPoint)
  }
}
