import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserTrainingComponent } from './content/user-training/user-training.component';
import { SportsmanProfileComponent } from './content/sportsman/sportsman-profile/sportsman-profile.component';
import { CoachProfileComponent } from './content/coach/coach-profile/coach-profile.component';

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
    TrainingComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    UserTrainingComponent,
    SportsmanProfileComponent,
    CoachProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
