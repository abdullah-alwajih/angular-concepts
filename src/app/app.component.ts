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

interface Post {
  title: string;
  content: string;
}

type ResponseType = {
  [key: string]: Post;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterLink, ActorFormComponent, ProfileEditorComponent, NgClass, UpperCasePipe, DatePipe, CurrencyPipe, DecimalPipe, ExponentialStrengthPipe, FlyingHeroesPipe, AsyncPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loadedPosts = [];
  baseUrl = 'https://angular-concepts-1568a-default-rtdb.firebaseio.com';
  endPoint = `${this.baseUrl}/posts.json`;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http.post(this.endPoint, postData).subscribe(value => {
      console.log(value)
    });
  }

  onFetchPosts() {
    this.http.get<ResponseType>(this.endPoint)
      .pipe(
        map(response => Object.keys(response).map(key => ({...response[key], id: key})))
      ).subscribe(response => {
      console.log(response)
    });
  }

  onClearPosts() {
    // Send Http request
  }
}
