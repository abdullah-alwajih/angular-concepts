import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./shared/components/layout/header/header.component";
import {ActorFormComponent} from "./features/actor/components/actor-form/actor-form.component";
import {ProfileEditorComponent} from "./features/profile/components/profile-editor/profile-editor.component";
import {AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, NgClass, UpperCasePipe} from "@angular/common";
import {ExponentialStrengthPipe} from "./shared/pipes/exponential-strength.pipe";
import {FlyingHeroesPipe} from "./shared/pipes/flying-heroes.pipe";
import {HttpClient} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {map} from "rxjs";
import {PostsComponent} from "./features/posts/components/posts/posts.component";
import {CourseListComponent} from "./features/courses/components/course-list/course-list.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterLink, ActorFormComponent, ProfileEditorComponent, NgClass, UpperCasePipe, DatePipe, CurrencyPipe, DecimalPipe, ExponentialStrengthPipe, FlyingHeroesPipe, AsyncPipe, FormsModule, PostsComponent, CourseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Angular Concepts'

}
