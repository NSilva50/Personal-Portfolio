import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bio',
    component:  BioComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'thumbnails',
    component: ThumbnailsComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BioComponent,
    SkillsComponent,
    ThumbnailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Remember Alex!!!!! (important)