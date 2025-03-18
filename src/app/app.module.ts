import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//to comunicate with back end we need to import http module to access backend
import { HttpClientModule } from '@angular/common/http';
// to access the modules so we need to import in the module main file //
import {FormsModule} from "@angular/forms"; //form controls and twoway comunication
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Component/Internet/home.component';
import { LoginComponent } from './Component/login/login.component';
import { DynamicFormComponentComponent } from './Component/dynamic-form-component/dynamic-form-component.component';
import { AboutPageComponent } from './Component/about-page/about-page.component';
import { WelcomepageComponent } from './Component/welcomepage/welcomepage.component';
import { CommonModule } from '@angular/common';
import { AppComponent1 } from './Component/app1/app.component';
import { RouterModule } from '@angular/router';
import { PageComponent } from './Component/page/page.component';
import { SecuredFileShareComponent } from './Forms/secured-file-share/secured-file-share.component';
import { HelpAndLearningComponent } from './Component/help-and-learning/help-and-learning.component';
import { UsefullLinksComponent } from './Component/usefull-links/usefull-links.component';
import { AppsComponent } from './Component/apps/apps.component';
import { ExampleComponent } from './Component/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DynamicFormComponentComponent,
    AboutPageComponent,
    WelcomepageComponent,
    AppComponent1,
    PageComponent,
    SecuredFileShareComponent,
    HelpAndLearningComponent,
    UsefullLinksComponent,
    AppsComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
