import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserComponent } from './user/user.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path:'',component:WelcomepageComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'user/:id',component:UserdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
