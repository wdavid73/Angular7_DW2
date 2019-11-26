import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* CONEXION API REST */
import { HttpClientModule } from '@angular/common/http';
import { TeamsService } from './teams.service';
/* COMPONENTES */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { TeamProfileComponent } from './components/team-profile/team-profile.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { PlayerComponent } from './components/player/player.component';
import { TablePositionComponent } from './components/table-position/table-position.component';
import { FavTeamsComponent } from './components/fav-teams/fav-teams.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { EventComponent } from './components/events/event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    TeamProfileComponent,
    HomeComponent,
    PlayerComponent,
    TablePositionComponent,
    FavTeamsComponent,
    AllEventsComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
