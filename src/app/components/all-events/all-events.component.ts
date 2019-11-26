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
  date = this.hoyFecha();

  constructor( private teamService: TeamsService ) { }

  ngOnInit() {
    this.teamService.getEventSeason().subscribe(
      (data) => {
        // tslint:disable-next-line: no-string-literal
        this.events = data['events'];
        this.events.forEach(ev => {
          if (ev.idHomeTeam === this.idTeam || ev.idAwayTeam === this.idTeam) {
            this.eventsbyTeam.push(ev);
          }
       });
      }
    );
    console.log(this.eventsbyTeam);
  }
  hoyFecha() {
    const hoy = new Date();
    const dd = hoy.getDate();
    const mm = hoy.getMonth() + 1;
    const yyyy = hoy.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  }

}
