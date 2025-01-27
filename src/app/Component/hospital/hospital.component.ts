import { Component } from '@angular/core';
import { HomeServiceService } from '../../Service/home-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HopitalserviceService } from '../../Service/hopitalservice.service';
import { CommonModule } from '@angular/common';
import { HospitalpipePipe } from '../../hospitalpipe.pipe';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-hospital',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    HospitalpipePipe,
    ReactiveFormsModule,
  ],
  providers: [HopitalserviceService],
  templateUrl: './hospital.component.html',
  styleUrl: './hospital.component.scss',
})
export class HospitalComponent {
  constructor(private hs: HopitalserviceService) {}

  user: any = {
    name: '',
    empId: '',
    mobNo: '',
    address: '',
    department: '',
  };

  userForm: FormGroup;

  response: any = [];
  ngOnInit() {
    this.getAllUser();
    // this.userForm = new FormGroup({
    //   name: new FormControl(null, Validators.required),
    //   empId: new FormControl(null, Validators.required),
    //   mobNo: new FormControl(null),
    //   address: new FormControl(null),
    //   department: new FormControl(null),
    // });
  }
  register(userForm: any) {
    console.log(this.userForm);
  }
  getAllUser() {
    return this.hs.getAllPatient().subscribe((res: any) => {
      console.log(res);
      this.response = res.comments;
      console.log(this.response);
    });
  }
  // saveAllUser() {
  //   const request = {
  //     name: this.user.name,
  //     empId: this.user.empId,
  //     mobNo: this.user.mobNo,
  //     address: this.user.address,
  //     department: this.user.department,
  //   };

  //   return this.hs.saveAllUser(request).subscribe((res: any) => {
  //     console.log(res);
  //   });
  // }
}
