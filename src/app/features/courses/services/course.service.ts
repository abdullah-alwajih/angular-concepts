import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICourse} from "../models/course.model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  id: number;
  counter = 0;

  constructor(private http: HttpClient) {
    this.counter++;
    this.id = this.counter;
  }

  loadCourses(): Observable<ICourse[]> {
    const params = new HttpParams().set("page", "1").set("pageSize", "10");
    return this.http.get<ICourse[]>('/api/courses', {params});
  }

  saveCourse(course: ICourse) {
    const headers = new HttpHeaders()
    .set("X-Auth", "userId");
    return this.http.put(`/api/courses/${course.id}`, course, {headers});
  }
}
