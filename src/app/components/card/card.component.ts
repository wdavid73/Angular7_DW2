import { Component, OnInit } from '@angular/core';
import { TeamsService} from '../../teams.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  title = 'Desarrollo Web 2';
  teams: any[] = [];
  TeamArray: any[] = [];
  constructor(protected teamService: TeamsService) {}

  saveTeam(idTeam) {
    this.teams.forEach(team => {
      if (team.idTeam === idTeam) {
        this.TeamArray.push(team);
        localStorage.setItem( 'teams' , JSON.stringify(this.TeamArray));
      }
    });
  }

  ngOnInit() {
    this.teamService.getTeams()
      .subscribe(
        (data) => {
          // tslint:disable-next-line: no-string-literal
          this.teams = data['teams'];
        },
        (error) => {
          console.error(error);
        }
      );
  }

}
