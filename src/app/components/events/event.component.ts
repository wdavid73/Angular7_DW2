import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: any[] = [];

  constructor(
    private teamService: TeamsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.teamService.getEventById(params.id).subscribe(
          (data) => {
            // tslint:disable-next-line: no-string-literal
            this.events = data['events'];
          },
          (error) => {
            console.error(error);
          }
        );
      }
    );



  }

}
