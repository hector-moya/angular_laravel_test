import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

export interface Medium {
  mediumID: Number,
  mediumName: String,
  mediumDescription: String,
  isUpdating: boolean,

}

const API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class MediumsService {

  private accessToken;
  private headers;

  constructor(private oktaAuth: OktaAuthService, private http: Http) { 
    this.init();
  }

  async init() {
    this.accessToken = await this.oktaAuth.getAccessToken();
    this.headers = new Headers({
      Authorization: 'Bearer ' + this.accessToken
    });
  }

  getMediums(): Observable<Medium[]> {
    return this.http.get(API_URL + '/api/mediums',
      new RequestOptions({ headers: this.headers })
    )
    .map(res => {
      let modifiedResult = res.json().data
            modifiedResult = modifiedResult.map(function(medium) {
        medium.isUpdating = false;
        return medium;
      });
      return modifiedResult;
    });
  }
}
