import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

export interface Role {
  roleID: Number,
  roleName: String,
  roleDescription: String,
  isUpdating: boolean,

}

const API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

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

  getRoles(): Observable<Role[]> {
    return this.http.get(API_URL + '/api/roles',
      new RequestOptions({ headers: this.headers })
    )
    .map(res => {
      let modifiedResult = res.json().data
            modifiedResult = modifiedResult.map(function(role) {
        role.isUpdating = false;
        return role;
      });
      return modifiedResult;
    });
  }
}
