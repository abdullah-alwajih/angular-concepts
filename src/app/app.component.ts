import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./shared/components/layout/header/header.component";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-concepts';
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(actorForm: NgForm) {
    this.submitted = true;
    console.log(actorForm.controls);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
