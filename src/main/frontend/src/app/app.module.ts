import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ResumeComponent} from './resume/resume.component';
import {ContactInfoComponent} from './resume/contact-info/contact-info.component';
import {WorkExperienceComponent} from './resume/work-experience/work-experience.component';
import {EducationComponent} from './resume/education/education.component';
import {MiscComponent} from './resume/misc/misc.component';
import {CustomComponent} from './resume/custom/custom.component';
import {AdminComponent} from './admin/admin.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormService} from "./service/form.service";

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'resume', component: LandingPageComponent},
  {path: 'create', component: ResumeComponent},
  {path: 'load', component: AdminComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ContactInfoComponent,
    WorkExperienceComponent,
    EducationComponent,
    MiscComponent,
    CustomComponent,
    AdminComponent,
    LandingPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
