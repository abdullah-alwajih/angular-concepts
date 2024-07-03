import {Attribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {ICourse} from "../../models/course.model";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course: ICourse = {} as ICourse;
  @Input() cardIndex?: number;
  @Output('courseChanged') courseEmitter = new EventEmitter<ICourse>();


  constructor(
    private courseService: CourseService,
    @Attribute('type') private type: string
  ) {
  }

  ngOnInit() {


  }


  onTitleChanged(newTitle: string) {

    this.course.description = newTitle;

  }


  onSaveClicked(description: string) {
    this.courseEmitter.emit({...this.course, description});
  }

}
