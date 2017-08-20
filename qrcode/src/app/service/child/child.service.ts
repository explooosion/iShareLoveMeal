import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ChildService {

  private api: string = '/api/child/';

  constructor(private http: Http) { }

  public getChild(id: String) {
    return this.http.get(this.api + id)
      .map((res) => {
        return res.json() || {}
      });
  }

}
