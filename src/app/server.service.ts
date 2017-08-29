import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ServerService {
  constructor(
    private http: Http
  ) { }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(
      'https://udemy-ng-http-8a266.firebaseio.com/data.json',
      servers, { headers });
  }

  getServers() {
    return this.http.get('https://udemy-ng-http-8a266.firebaseio.com/data.json');
  }
}
