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
  events: any[] = [];
  results: any[] = [];
  table: any[] = [];

  constructor(
    private teamService: TeamsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        /* Obtener Equipo Por ID */
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
        /* Obtener Jugador de Equipo Por ID */
        this.teamService.getPlayerByTeamId(params.id)
        .subscribe(
          (data) => {
            // tslint:disable-next-line: no-string-literal
            this.player = data['player'];
          },
          (error) => {
            console.error(error);
          }
        );
        /* Obtener ultimos 5 Eventos del Equipo por ID */
        this.teamService.getLastEventTeamById(params.id).subscribe(
          (data) => {
            // tslint:disable-next-line: no-string-literal
            this.results = data['results'];
          },
          (error) => {
            console.log(error);
          }
        );
        /* Obtener Proximos 5 Eventos del Equipo por ID */
        this.teamService.getNextEventTeamById(params.id).subscribe(
          (data) => {
            // tslint:disable-next-line: no-string-literal
            this.events = data['events'];
          },
          (error) => {
            console.log(error);
          }
        );
      }
    );
  }
}
