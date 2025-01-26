import { Component } from '@angular/core';
import { SubscriptionService } from '../../Service/subscription.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  providers:[SubscriptionService], //how to provide
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  //what to provide
  constructor(private sub: SubscriptionService) {}
  onSubscribe() {
    this.sub.onSubscribeClicked();
  }
}
