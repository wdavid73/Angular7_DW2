import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamProfileComponent } from './components/team-profile/team-profile.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '' , component : HomeComponent },
  { path: 'team/:id/details' , component : TeamProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
