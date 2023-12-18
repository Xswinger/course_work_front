import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsmanComponent } from './content/sportsman/sportsman.component';
import { SportsSchoolComponent } from './content/sports-school/sports-school.component';

const routes: Routes = [
  { path: "sportsman", component: SportsmanComponent },
  { path: "sports_school", component: SportsSchoolComponent },
  { path: "**", redirectTo: "/" } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
