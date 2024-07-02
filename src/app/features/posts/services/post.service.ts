import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {IPost, ResponseType} from "../models/posts.model";
import {catchError, map, Subject, tap} from "rxjs";

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
    this.http.post(this.endPoint, post, {
        observe: 'response'
      }
    ).subscribe({
      next: response => console.log(response),
      error: error => this.error.next(error.error.error),
    });
  }

  delete(id?: string) {
    return this.http.delete(this.endPoint, {
      observe: 'events'
    }).pipe(
      tap((event) => {
        // console.log(data);
        switch (event.type) {
          case HttpEventType.Response:
            console.log(event.body);
            break;
          case HttpEventType.DownloadProgress:
            console.log(event.type);
            break;
          case HttpEventType.ResponseHeader:
            console.log(event.status);
            break;
          case HttpEventType.Sent:
            console.log(event.type);
            break;
          case HttpEventType.UploadProgress:
            console.log(event.type);
            break;
          case HttpEventType.User:
            console.log(event.type);
            break;
        }
      })
    )
  }
}
