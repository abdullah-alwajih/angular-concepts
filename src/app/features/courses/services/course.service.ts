import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICourse} from "../models/course.model";

let  counter = 0;


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class CourseService {
  id: number;

  constructor(private http: HttpClient) {
    counter++;
    this.id = counter;
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
