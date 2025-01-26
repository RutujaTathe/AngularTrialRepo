import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RoutingRoutingModule } from './routing/routing-routing.module';
import { UserComponent } from './Component/user/user.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomePipe } from './welcome.pipe';
import { DemopipePipe } from './demopipe.pipe';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    RoutingRoutingModule,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
    WelcomePipe,
    DemopipePipe,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'testApplication';
  numbers: any[] = [1, 2, 3, 4];

  n1: number = 34;
  n2: number = 90;
  // ngOnInit(){
  //   this.register(FormData);
  //}

  // register(regdata: NgForm) {
  //   console.log(regdata.value);
  // }
}
