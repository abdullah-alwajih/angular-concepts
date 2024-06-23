import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Gender, GENDER} from "../../../../shared/enums/gender.enum";
import {forbiddenNameValidator} from "../../../../shared/validators/forbidden-name.directive";

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   }),
  // });
  profileForm: FormGroup;
  genders: Gender[] = [Gender.male, Gender.female];
  protected readonly GENDER = GENDER;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      firstName: [null, [Validators.required, forbiddenNameValidator(/bob/i)]],
      lastName: [null, [forbiddenNameValidator(/bob/i)]],
      gender: [Gender.male],
      address: this.formBuilder.nonNullable.group({
        street: [null],
        city: ['Riyadh'],
        state: [null],
        zip: [null],
      }),
      aliases: this.formBuilder.array([this.formBuilder.control(null)]),
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  resetForm = () => this.profileForm.reset();

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm);
  }
}
