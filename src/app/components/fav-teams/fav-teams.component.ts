import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-fav-teams',
  templateUrl: './fav-teams.component.html',
  styleUrls: ['./fav-teams.component.css']
})
export class FavTeamsComponent implements OnInit {
  teams = this.getTeamFav();


  constructor() {}

  getTeamFav() {
    if (JSON.parse( localStorage.getItem('teams')) != null) {
      return JSON.parse( localStorage.getItem('teams'));
    } else {
      return '';
    }
  }

  ngOnInit() {
  }

}
