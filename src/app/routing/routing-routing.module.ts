import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Component/home/home.component';
import { UserComponent } from '../Component/user/user.component';
import { PipecomponentComponent } from '../Component/pipecomponent/pipecomponent.component';
import { ReactiveformComponent } from '../Component/reactiveform/reactiveform.component';
import { FormReactiveComponent } from '../Component/form-reactive/form-reactive.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'user', component: UserComponent },
  { path: 'pipe', component: PipecomponentComponent },
  { path: 'reactive', component: ReactiveformComponent },
  { path: 'form', component: FormReactiveComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingRoutingModule {}
