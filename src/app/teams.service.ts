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
  getPlayerByTeamId(id) {
    const urlApi = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=' + id;
    return this.http.get(urlApi);
  }

  getPlayerById(id) {
    const urlApi = 'https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=' + id;
    return this.http.get(urlApi);
  }
  getNextEventTeamById(id) {
    const urlApi = 'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=' + id;
    return this.http.get(urlApi);
  }

  getLastEventTeamById(id) {
    const urlApi = 'https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=' + id;
    return this.http.get(urlApi);
  }
  getTablePosition() {
    const urlApi = 'https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920';
    return this.http.get(urlApi);
  }

  /*
    jugadores por ID de equipo:https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=133604
    Jugadores por ID : htps://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=34145937
    Próximos 5 eventos por ID de equipo : https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133613
    Últimos 5 eventos por ID de equipo : https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133602
    Tabla de Posiciones : https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920

  */


}

