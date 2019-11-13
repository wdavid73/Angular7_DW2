import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor( protected http: HttpClient) { }

  getTeams() {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League');
  }

  getTeamById(id) {
    const urlApi = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + id;
    return this.http.get(urlApi);
  }


}

