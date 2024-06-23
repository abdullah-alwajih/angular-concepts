import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./shared/components/layout/header/header.component";
import {ActorFormComponent} from "./features/actor/components/actor-form/actor-form.component";
import {ProfileEditorComponent} from "./features/profile/components/profile-editor/profile-editor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterLink, ActorFormComponent, ProfileEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-concepts';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
