import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  //{ path: 'register', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'detail/:key', loadChildren: './detail/detail.module#DetailPageModule'},
  { path: 'login', loadChildren: './signin/signin.module#SigninPageModule' },
  //{ path: 'logout', loadChildren: './signin/signin.module#SignupPageModule' },
  { path: 'edit', loadChildren: './edit/edit.module#EditPageModule' },
  { path: 'create', loadChildren: './create/create.module#CreatePageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
