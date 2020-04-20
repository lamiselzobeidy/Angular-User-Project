import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { HomeComponent } from './components/home/home.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';


const routes: Routes = [
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'add-user', component: AddUserComponent
  },
  {
    path: 'edit-user', component: EditUserComponent
  },
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UsersComponent, AddUserComponent, EditUserComponent]
