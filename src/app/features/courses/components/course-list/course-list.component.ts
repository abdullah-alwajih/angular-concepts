import {Component, Injector} from '@angular/core';
import {CourseCardComponent} from "../course-card/course-card.component";
import {COURSES, ICourse} from "../../models/course.model";
import {CourseService} from "../../services/course.service";
import {CourseImageComponent} from "../course-image/course-image.component";

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CourseCardComponent,
    CourseImageComponent
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: ICourse[] = COURSES;

  coursesTotal = this.courses.length;

  constructor(
    private courseService: CourseService,
    private injector: Injector
  ) {
  }

  ngOnInit() {

    //const htmlElement = createCustomElement(CourseTitleComponent, {injector:this.injector});

    //customElements.define('course-title', htmlElement);

  }

  onEditCourse() {
    this.courses[1].category = 'ADVANCED';
  }

  save(course: ICourse) {
    this.courseService.saveCourse(course)
    .subscribe(
      () => console.log('Course Saved!')
    );
  }

}
