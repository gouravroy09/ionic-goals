import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'detail/:key', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'create', loadChildren: './detail/detail.module#DetailPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
