import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Gender, GENDER} from "../../../../shared/enums/gender.enum";
import {forbiddenNameValidator} from "../../../../shared/validators/forbidden-name.directive";
import {UniqueRoleValidator} from "../../../../shared/validators/role.directive";

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent implements OnInit {
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

  constructor(
    private formBuilder: FormBuilder,
    private roleValidator: UniqueRoleValidator
  ) {
    this.profileForm = this.formBuilder.group({
      firstName: [null, [Validators.required, forbiddenNameValidator(/bob/i)]],
      lastName: new FormControl('', {
        asyncValidators: [this.roleValidator.validate.bind(this.roleValidator)],
        updateOn: 'blur',
      }),
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

  ngOnInit() {
    this.profileForm.get('firstName')?.valueChanges.subscribe(value => {
      console.log(value);
    })
    this.profileForm.get('lastName')?.statusChanges.subscribe(value => {
      console.log(value);
    })
    this.profileForm.setValue({
      firstName: 'Abdullah',
      lastName: 'Al-Wajih',
      gender: [Gender.male],
      address: this.formBuilder.nonNullable.group({
        street: [null],
        city: ['Riyadh'],
        state: [null],
        zip: [null],
      }),
      aliases: this.formBuilder.array([this.formBuilder.control(null)]),
    });

    this.profileForm.patchValue({
      firstName: 'Abdullah'
    })
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
