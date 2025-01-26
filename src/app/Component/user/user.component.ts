import { Component,OnInit } from '@angular/core';
import { HomeServiceService } from '../../Service/home-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SubscriptionService } from '../../Service/subscription.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HttpClientModule, CommonModule,FormsModule],
  providers: [HomeServiceService, SubscriptionService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  localVariable: any;
  //calling services //inject service in component
  constructor(
    private userservice: HomeServiceService,
    private sub: SubscriptionService
  ) {}
  formData={
    name:'',
    employeeID:'',
    email:'',
    gender:'',
    department:''
  }

  ngOnInit() {
    this.getAllPost();
  }

  serviceVariable = this.userservice.Name;
  getAllPost() {
    this.userservice.getAllPOst().subscribe((res: any) => {
      this.localVariable = res.todos;
      console.log(res);
    });
  }

  saveAllUSER(){
    const requestBody={
    name:this.formData.name,
    employeeID:this.formData.employeeID,
    email:this.formData.email,
    gender:this.formData.gender,
    department:this.formData.department
    }
    this.sub.saveUsers(requestBody).subscribe((res)=>{
           console.log(res)
    })
    

  }
  onSubscribe() {
    this.sub.onSubscribeClicked();
  }
}
