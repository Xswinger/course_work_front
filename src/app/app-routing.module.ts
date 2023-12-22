import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsmanComponent } from './content/sportsman/sportsman.component';
import { SportsSchoolComponent } from './content/sports-school/sports-school.component';
import { ProfileComponent } from './content/profile/profile.component';
import { CompetitionComponent } from './content/competition/competition.component';
import { RatingComponent } from './content/rating/rating.component';
import { HomeComponent } from './content/home/home.component';
import { CoachComponent } from './content/coach/coach.component';
import { TrainingComponent } from './content/training/training.component';

const routes: Routes = [
  { path: "sportsman", component: SportsmanComponent },
  { path: "sports_school", component: SportsSchoolComponent },
  { path: "profile", component: ProfileComponent },
  { path: "competition", component: CompetitionComponent },
  { path: "rating", component: RatingComponent },
  { path: "coach", component: CoachComponent },
  { path: "training", component: TrainingComponent },
  { path: "**", component: HomeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
