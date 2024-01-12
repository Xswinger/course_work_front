import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsmanComponent } from './content/sportsman/sportsman.component';
import { SportsSchoolComponent } from './content/sports-school/sports-school.component';
import { ProfileComponent } from './content/profile/profile.component';
import { CompetitionComponent } from './content/competition/competition.component';
import { RatingComponent } from './content/rating/rating.component';
import { HomeComponent } from './content/home/home.component';
import { CoachComponent } from './content/coach/coach.component';
import { TrainingComponent } from './content/training/training.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserTrainingComponent } from './content/user-training/user-training.component';
import { SportsmanProfileComponent } from './content/sportsman/sportsman-profile/sportsman-profile.component';
import { CoachProfileComponent } from './content/coach/coach-profile/coach-profile.component';

const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "login", component: LoginComponent},
  { path: "signup", component: SignupComponent },
  { path: "sportsman", component: SportsmanComponent
  // , children: [
  //   { path: ":id", component: SportsmanProfileComponent }
  // ] 
  },
  { path: "sportsman/:id", component: SportsmanProfileComponent },
  { path: "sports_school", component: SportsSchoolComponent },
  { path: "profile", component: ProfileComponent },
  { path: "competition", component: CompetitionComponent },
  { path: "rating", component: RatingComponent },
  { path: "coach", component: CoachComponent 
  // , children: [
  //   { path: ":id", component: CoachProfileComponent }
  // ] 
  },
  { path: "coach/:id", component: CoachProfileComponent },
  { path: "training", component: TrainingComponent },
  { path: "home", component: HomeComponent },
  { path: "my_training", component: UserTrainingComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
