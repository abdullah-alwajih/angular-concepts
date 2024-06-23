import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./shared/components/layout/header/header.component";
import {ActorFormComponent} from "./features/actor/components/actor-form/actor-form.component";
import {ProfileEditorComponent} from "./features/profile/components/profile-editor/profile-editor.component";
import {AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, NgClass, UpperCasePipe} from "@angular/common";
import {ExponentialStrengthPipe} from "./shared/pipes/exponential-strength.pipe";
import {SERVERS} from "./shared/mocks/mock-servers";
import {HEROES} from "./shared/mocks/mock-heroes";
import {FlyingHeroesPipe} from "./shared/pipes/flying-heroes.pipe";
import {interval, map, Observable, startWith, take} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterLink, ActorFormComponent, ProfileEditorComponent, NgClass, UpperCasePipe, DatePipe, CurrencyPipe, DecimalPipe, ExponentialStrengthPipe, FlyingHeroesPipe, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  servers = SERVERS;
  heroes = HEROES;
  message$: Observable<string>;
  private messages = ['You are my hero!', 'You are the best hero!', 'Will you be my hero?'];

  constructor() {
    this.message$ = this.getResendObservable();
  }

  resend() {
    this.message$ = this.getResendObservable();
  }

  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  private getResendObservable() {
    return interval(1000).pipe(
      map((i) => `Message #${i + 1}: ${this.messages[i]}`),
      take(this.messages.length),
      startWith('Waiting for messages...'),
    );
  }
}
