import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.scss',
})
export class ReactiveformComponent {
  regForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    // this.regForm = new FormGroup({
    //   id: new FormControl(),
    //   FirstName: new FormControl(),
    //   LastName: new FormControl(),
    //   Email: new FormControl(),
    //   MobileNo: new FormControl(),
    //   Address: new FormControl(),
    // });

    this.regForm = this.fb.group({
      id: [' '],
      FirstName: [' '],
      LastName: [' '],
      Email: [' '],
      MobileNo: [' '],
      Address: [' '],
    });
  }
  register(Formdata: FormGroup) {
    // console.log(Formdata.value);
    console.log(this.regForm.value);
  }
}
