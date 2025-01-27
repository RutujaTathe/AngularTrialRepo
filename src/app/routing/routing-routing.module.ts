import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Component/home/home.component';
import { UserComponent } from '../Component/user/user.component';
import { PipecomponentComponent } from '../Component/pipecomponent/pipecomponent.component';
import { ReactiveformComponent } from '../Component/reactiveform/reactiveform.component';
import { FormReactiveComponent } from '../Component/form-reactive/form-reactive.component';
import { HopitalserviceService } from '../Service/hopitalservice.service';
import { HospitalComponent } from '../Component/hospital/hospital.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'user', component: UserComponent },
  { path: 'pipe', component: PipecomponentComponent },
  { path: 'reactive', component: ReactiveformComponent },
  { path: 'hospital', component: HospitalComponent },

  { path: 'form', component: FormReactiveComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //for empty path user navigate to home page
  { path: '**', redirectTo: 'home' }, //for any un-necessary or undefined path user navigate to home page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingRoutingModule {}
