import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent} from './components/users/users.component'
import { UserProfileComponent} from './components/user-profile/user-profile.component'
import { AddUserComponent } from './components/add-user/add-user.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { HomeComponent } from './components/home/home.component'


const routes: Routes = [
  {
    path: 'users', component:UsersComponent
  },
  {
    path: 'user-profile', component:UserProfileComponent
  },
  {
    path: 'add-user', component:AddUserComponent
  },
  {
    path: '', component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UsersComponent, UserProfileComponent, AddUserComponent]
