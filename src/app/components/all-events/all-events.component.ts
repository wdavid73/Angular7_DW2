import { Component, OnInit, Input } from '@angular/core';
import { TeamsService } from '../../teams.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  @Input() idTeam: string;
  events: any[] = [];
  eventsbyTeam: any[] = [];

  constructor( private teamService: TeamsService ) { }

  ngOnInit() {
    this.teamService.getEventSeason().subscribe(
      (data) => {
        this.events = data["events"]
        this.events.forEach(ev => {
          if (ev.idHomeTeam === this.idTeam || ev.idAwayTeam === this.idTeam) {
            this.eventsbyTeam.push(ev);
          }
       });
      }
    );
  }

}
