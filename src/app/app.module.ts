import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SportsSchoolComponent } from './content/sports-school/sports-school.component';
import { SportsmanComponent } from './content/sportsman/sportsman.component';
import { ProfileComponent } from './content/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompetitionComponent } from './content/competition/competition.component';
import { RatingComponent } from './content/rating/rating.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './content/home/home.component';
import { CoachComponent } from './content/coach/coach.component';
import { TrainingComponent } from './content/training/training.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SportsSchoolComponent,
    SportsmanComponent,
    ProfileComponent,
    CompetitionComponent,
    RatingComponent,
    HomeComponent,
    CoachComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
