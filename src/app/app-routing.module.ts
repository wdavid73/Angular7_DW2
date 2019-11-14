import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamProfileComponent } from './components/team-profile/team-profile.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';

const routes: Routes = [
  { path: '' , component : HomeComponent },
  { path: 'team/:id/details' , component : TeamProfileComponent },
  { path: 'player/:id/profile' , component : PlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
