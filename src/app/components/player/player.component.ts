import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players: any[] = [];
  constructor(
    private teamService: TeamsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.teamService.getPlayerById(params.id).subscribe(
          (data) => {
            // tslint:disable-next-line: no-string-literal
            this.players = data['players'];
          },
          (error) => {
            console.log(error);
          }
        );
      }
    );
  }
}
