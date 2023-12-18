import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SportsSchoolComponent } from './content/sports-school/sports-school.component';
import { SportsmanComponent } from './content/sportsman/sportsman.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SportsSchoolComponent,
    SportsmanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
