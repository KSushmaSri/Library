import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { SubcardsComponent } from './subcards/subcards.component';
import { FaqComponent } from './faq/faq.component';
import { SliderComponent } from './slider/slider.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FictionalComponent } from './fictional/fictional.component';
import { NonfictionalComponent } from './nonfictional/nonfictional.component';
import { SubfictionalComponent } from './subfictional/subfictional.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserdetailsComponent,
    WelcomepageComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    SubcardsComponent,
    FaqComponent,
    SliderComponent,
    ContactusComponent,
    PagenotfoundComponent,
    FictionalComponent,
    NonfictionalComponent,
    SubfictionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
