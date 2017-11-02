import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import { RoomsComponent } from './rooms/rooms.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

// import { AuthGuard } from './shared/auth/auth.guard';
// import { LoginGuard } from './shared/auth/login.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent/*, canActivate: [LoginGuard]*/ },
  { path: 'orders', component: OrdersComponent/*, canActivate: [LoginGuard]*/ },
  { path: 'rooms', component: RoomsComponent/*, canActivate: [LoginGuard]*/ },
  { path: 'about', component: AboutComponent/*, canActivate: [LoginGuard]*/ },
  { path: 'profile', component: UserProfileComponent/*, canActivate: [LoginGuard]*/ },
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: '**', redirectTo: '/orders' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }