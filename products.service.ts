import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Products } from './classes/products';

/*export interface Product {
  productID: Number,
  productName: String,
  colourRange: String,
  gradeID:Number,
  consistencyID: Number,
  productDescription: String,
  manufacturerID: Number,
  mediumID: Number,
  isUpdating: boolean,

}*/
const API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

  addProduct(productForm: Products): Observable<Products> {
    return this.http.post(API_URL + '/api/products', productForm,
        new RequestOptions({ headers: this.headers })
    ).map(res => res.json().data);
}
}
