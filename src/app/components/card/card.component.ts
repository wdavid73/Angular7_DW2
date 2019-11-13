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
  constructor(protected teamService: TeamsService) { }

  ngOnInit() {
    this.teamService.getTeams()
      .subscribe(
        (data) => {
          console.log(data);
          // tslint:disable-next-line: no-string-literal
          this.teams = data['teams'];
        },
        (error) => {
          console.error(error);
        }
      );
  }

}
