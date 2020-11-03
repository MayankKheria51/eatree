import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { DisplayComponent } from './components/display/display.component';
import { btsComponent } from './components/bts/bts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'display' },
  { path: 'login', component: LogInComponent },
  { path: 'bts', component: btsComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
