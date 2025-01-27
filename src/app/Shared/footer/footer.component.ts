import { Component } from '@angular/core';
import { SubscriptionService } from '../../Service/subscription.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AdditionPipe } from '../../addition.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [SubscriptionService],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  recipe: any;
  constructor(private sub: SubscriptionService) {}

  ngOnInit() {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.sub.getUsers().subscribe((res) => {
      this.recipe = res.recipes;
      console.log(res);
    });
  }
}
