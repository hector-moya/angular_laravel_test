import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

export interface Grade {
  gradeID: Number,
  gradeName: String,
  gradeDescription: String,
  isUpdating: boolean,

}

const API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

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
  getGrades(): Observable<Grade[]> {
    return this.http.get(API_URL + '/api/grades',
      new RequestOptions({ headers: this.headers })
    )
    .map(res => {
      let modifiedResult = res.json().data
            modifiedResult = modifiedResult.map(function(grade) {
        grade.isUpdating = false;
        return grade;
      });
      return modifiedResult;
    });
  }
}
