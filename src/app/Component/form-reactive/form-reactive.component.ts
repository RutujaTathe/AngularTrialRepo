import { CommonModule, NgIf } from '@angular/common';
import { NonNullAssert } from '@angular/compiler';
import { Component } from '@angular/core';
import {
  EmailValidator,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-form-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.scss',
})
export class FormReactiveComponent {
  reactiveform: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.reactiveform = new FormGroup({
      Name: new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      MobileNo: new FormControl(null, Validators.required),
      DateOfBirth: new FormControl(null),
      Gender: new FormControl(null),
      Address: new FormGroup({
        city: new FormControl(null, Validators.required),
        postalCode: new FormControl(null),
      }),

      skills: new FormArray([
        new FormControl(null, Validators.required), //object of formcontrol
      ]),
      branch: new FormArray([new FormControl(null, Validators.required)]),

      experience: new FormArray([
        new FormGroup({
          Company: new FormControl(null),
          YearOfExperience: new FormControl(null),
        }),
      ]),
    });
  }

  register(reactiveform) {
    console.log(this.reactiveform);
  }

  //only push()is available for FormArray
  Addskills() {
    (<FormArray>this.reactiveform.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }
  AddSubSKill() {
    (<FormArray>this.reactiveform.get('branch')).push(
      new FormControl(null, Validators.required)
    );
  }
  deleteSkill(index: number) {
    const controls = <FormArray>this.reactiveform.get('skills');
    controls.removeAt(index);
  }
  DeleteSkill(index: number) {
    const branch = <FormArray>this.reactiveform.get('branch');
    branch.removeAt(index);
  }
}
