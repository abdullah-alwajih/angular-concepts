import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost, ResponseType} from "../models/posts.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = 'https://angular-concepts-1568a-default-rtdb.firebaseio.com';
  endPoint = `${this.baseUrl}/posts.json`;

  constructor(private http: HttpClient) {
  }

  getList() {
    return this.http.get<ResponseType>(this.endPoint);
  }

  create(post: IPost) {
    return this.http.post(this.endPoint, post);
  }
}
