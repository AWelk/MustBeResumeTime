import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ResumeComponent} from './resume/resume.component';
import {ContactInfoComponent} from './resume/contact-info/contact-info.component';
import {WorkExperienceComponent} from './resume/work-experience/work-experience.component';
import {EducationComponent} from './resume/education/education.component';
import {SkillsComponent} from './resume/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ContactInfoComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
