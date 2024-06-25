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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterLink, ActorFormComponent, ProfileEditorComponent, NgClass, UpperCasePipe, DatePipe, CurrencyPipe, DecimalPipe, ExponentialStrengthPipe, FlyingHeroesPipe, AsyncPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loadedPosts = [];
  baseUrl = 'https://angular-concepts-1568a-default-rtdb.firebaseio.com'

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http.post(`${this.baseUrl}/posts.json`, postData).subscribe(value => {
      console.log(value)
    });
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}
