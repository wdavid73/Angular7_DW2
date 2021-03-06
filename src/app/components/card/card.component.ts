import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  teams: any[] = [];
  TeamArray: any[] = [];

  constructor(protected teamService: TeamsService) { }

  saveTeam(idTeam) {
    this.teams.forEach(e => {
      if (idTeam === e.idTeam) {
        this.TeamArray.push(e);
      }
    });
    this.TeamArray = this.TeamArray.filter(
      (e, index, self) =>
        index === self.findIndex(t => t.idTeam === e.idTeam)
    );
    localStorage.setItem('teams' , JSON.stringify(this.TeamArray));
  }

  ngOnInit() {
    this.teamService.getTeams().subscribe(
      data => {
        // tslint:disable-next-line: no-string-literal
        this.teams = data['teams'];
      },
      error => {
        console.error(error);
      }
    );
  }
}
