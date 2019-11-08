import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

export interface User {
  userID: Number,
  userName: String,
  userSurname: String,
  role: Number,
  isUpdating: boolean,
}

const API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
  getUsers(): Observable<User[]> {
    return this.http.get(API_URL + '/api/users',
      new RequestOptions({ headers: this.headers })
    )
      .map(res => {
        let modifiedResult = res.json().data
        modifiedResult = modifiedResult.map(function (user) {
          user.isUpdating = false;
          return user;
        });
        return modifiedResult;
      });
  }
  addUser(user): Observable<User> {
    return this.http.post(API_URL + '/api/users', user,
      new RequestOptions({ headers: this.headers })
    ).map(res => res.json().data);
  }

  //To do Delete Users
  /*
  deleteUser(userID): Observable<User> {
    return this.http.delete(API_URL + '/api/users/' + userID,
      new RequestOptions({ headers: this.headers })
    );
  }*/

}
