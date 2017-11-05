import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
 { path: '', redirectTo: 'about-me', pathMatch: 'full'},
 { path: 'about-me', component: AboutMeComponent},
 { path: 'resume', component: ResumeComponent},
 { path: 'projects', component: ProjectsComponent},
 { path: 'contact-me', component: ContactMeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
