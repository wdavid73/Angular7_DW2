import { Component, OnInit , Input } from '@angular/core';
import { TeamsService } from '../../teams.service';

@Component({
  selector: 'app-table-position',
  templateUrl: './table-position.component.html',
  styleUrls: ['./table-position.component.css']
})
export class TablePositionComponent implements OnInit {
  @Input() idTeam: string;
  table: any[] = [];

  constructor(private teamService: TeamsService) { }

  ngOnInit() {
    this.teamService.getTablePosition()
      .subscribe(
        (data) => {
          // tslint:disable-next-line: no-string-literal
          this.table = data['table'];
        },
        (error) => {
          console.error(error);
        }
      );
  }

}
