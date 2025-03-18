import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/Internet/home.component';
import { LoginComponent } from './Component/login/login.component';
import { DynamicFormComponentComponent } from './Component/dynamic-form-component/dynamic-form-component.component';
import { AboutPageComponent } from './Component/about-page/about-page.component';
import { AppComponent1 } from './Component/app1/app.component';
import { WelcomepageComponent } from './Component/welcomepage/welcomepage.component';
import { PageComponent } from './Component/page/page.component';
import { SecuredFileShareComponent } from './Forms/secured-file-share/secured-file-share.component';
import { HelpAndLearningComponent } from './Component/help-and-learning/help-and-learning.component';
import { UsefullLinksComponent } from './Component/usefull-links/usefull-links.component';
import { AppsComponent } from './Component/apps/apps.component';
import { ExampleComponent } from './Component/example/example.component';


const routes: Routes = [
  {path:'',redirectTo:'page',pathMatch:'full'},
 { path:'internet', component:HomeComponent},
 {path:'Login',component:LoginComponent},
 {path:'Form',component:DynamicFormComponentComponent},
 {path:'AboutPage',component:AboutPageComponent},
 {path:'App1',component:AppComponent1},
 {path:'welcome',component:WelcomepageComponent},
 {path:'page',component:PageComponent},
 {path:'sharefs',component:SecuredFileShareComponent},
 {path:'help',component:HelpAndLearningComponent},
 {path:'usefull',component:UsefullLinksComponent},
 {path:'apps',component:AppsComponent},
 {path:'example',component:ExampleComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
