import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ResumeComponent} from './resume/resume.component';
import {ContactInfoComponent} from './resume/contact-info/contact-info.component';
import {WorkExperienceComponent} from './resume/work-experience/work-experience.component';
import {EducationComponent} from './resume/education/education.component';
import {MiscComponent} from './resume/misc/misc.component';
import {AdminComponent} from './admin/admin.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormsService} from "./service/forms.service";
import {ReviewComponent} from './resume/review/review.component';
import {ModalModule, TabsModule} from "ngx-bootstrap";
import {ContactFormService} from "./service/contact-form.service";
import {StaticDataService} from "./service/static-data.service";
import {EdFormService} from "./service/ed-form.service";
import {MiscFormService} from "./service/misc-form.service";
import {WorkFormService} from "./service/work-form.service";

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
    AdminComponent,
    LandingPageComponent,
    LoginComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
    FormsService,
    ContactFormService,
    EdFormService,
    MiscFormService,
    WorkFormService,
    StaticDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
