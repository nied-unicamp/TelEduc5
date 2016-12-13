import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { User }           from '../shared/user';
import { Observable }       from 'rxjs/Observable';

@Injectable()
export class HeroService {
  private userAddUrl = 'http://localhost:8000/add/usuario';
  private userGetUrl = 'http://localhost:8000/usuarios';

  constructor (private http: Http) {}

  getUsers (): Observable<User[]> {
    return this.http.get(this.userGetUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  addUser (name: string): Observable<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.userAddUrl, { name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}