import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {IPost, ResponseType} from "../models/posts.model";
import {catchError, map, Subject} from "rxjs";

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
    const headers = new HttpHeaders();
    headers.append('Custom-Header', 'Hello World !')

    const params = new HttpParams();
    params.append('print', 'pretty');
    params.append('custom', 'key');

    return this.http.get<ResponseType>(this.endPoint, {
        headers: headers,
        params: params
      }
    ).pipe(
      map(response => {
        if (!response) return [];
        return Object.keys(response).map(key => ({...response[key], id: key}));
      }),
      catchError(error => {
        throw error.error.error
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
