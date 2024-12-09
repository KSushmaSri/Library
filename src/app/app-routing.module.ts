import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserComponent } from './user/user.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FictionalComponent } from './fictional/fictional.component';
import { NonfictionalComponent } from './nonfictional/nonfictional.component';

const routes: Routes = [
  {
    path:'',component:WelcomepageComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'user/:id',component:UserdetailsComponent
  },
  {
    path:'fictional',component:FictionalComponent
  },
  {
    path:'nonfictional',component:NonfictionalComponent
  },
  {
    path:'**',component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
