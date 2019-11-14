import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent implements OnInit {
  player: any[] = [];
  teams: any[] = [];

  constructor(
    private teamService: TeamsService,
    private route: ActivatedRoute
    ) { }
  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.teamService.getTeamById(params.id)
        .subscribe(
          (data) => {
            // tslint:disable-next-line: no-string-literal
            this.teams = data['teams'];
          },
          (error) => {
            console.error(error);
          }
        );
        this.teamService.getPlayerById(params.id)
        .subscribe(
          (data) => {
            // tslint:disable-next-line: no-string-literal
            this.player = data['player'];
          },
          (error) => {
            console.error(error);
          }
        );
      }
    );
  }
}
