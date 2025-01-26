import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SubscriptionService } from '../../Service/subscription.service';
import { HomeServiceService } from '../../Service/home-service.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [SubscriptionService, HomeServiceService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private sub: SubscriptionService, private router: Router) {}
  recipes: any = [];
  ngOnInit() {
    this.getAlluser();
  }
  formData = {
    name: '',
    employeeID: '',
    gender: '',
    email: '',
    department: '',
  };
  getAlluser() {
    this.sub.getUsers().subscribe((res: any) => {
      this.recipes = res.recipes;

      console.log(res);
    });
  }

  onClick() {
    this.router.navigate(['user']);
  }

  saveUser() {
    const requestBody = {
      name: this.formData.name,
      employeeID: this.formData.employeeID,
      email: this.formData.email,
      gender: this.formData.gender,
      department: this.formData.department,
    };
    this.sub.saveUsers(requestBody).subscribe((res: any) => {
      console.log(res);
    });
  }
}
