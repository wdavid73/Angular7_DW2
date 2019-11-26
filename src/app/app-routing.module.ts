import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamProfileComponent } from './components/team-profile/team-profile.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { EventComponent } from './components/events/event.component';

const routes: Routes = [
  { path: '' , component : HomeComponent },
  { path: 'team/:id/details' , component : TeamProfileComponent },
  { path: 'player/:id/profile' , component : PlayerComponent },
  { path: 'event/:id/details' , component : EventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
