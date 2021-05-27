import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RemindPasswordComponent } from './components/remind-password/remind-password.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'remind-password',
  component: RemindPasswordComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
