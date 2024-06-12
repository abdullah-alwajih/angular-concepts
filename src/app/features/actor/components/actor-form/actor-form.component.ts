import {Component} from '@angular/core';
import {Actor, GENDER, Gender} from "../../models/actor";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-actor-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './actor-form.component.html',
  styleUrl: './actor-form.component.css'
})
export class ActorFormComponent {
  protected readonly GENDER = GENDER;
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  actor = new Actor(18, 'Tom Cruise',this.skills[3], 'CW Productions');

  genders: Gender[] = [Gender.male, Gender.female];

  submitted = false;

  onSubmit(actorForm: NgForm) {
    this.submitted = true;
    console.log(actorForm.value);
    console.log(actorForm.controls);
    console.log(this.actor);
  }

  suggestUserName() {
    this.actor.name = 'Superuser';
  }

  reset(actorForm: NgForm) {
    actorForm.reset()
  }


}
