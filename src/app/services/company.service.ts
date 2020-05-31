import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public url = environment.api;

  constructor(private http: HttpClient) { }
  getAllCompany(): Observable<any> {
    try {
      return this.http.get(this.url + 'company/all');
    } catch (error) {
      console.log(error);
    }
  }
  async addNewCompany(data) {
    try {
      let respdata;
      await this.http.post(this.url + 'company/create', data).forEach(data => respdata = data);
      return respdata;
    } catch (error) {
      console.log(error);
    }
  }
  async editCompany(id, data) {
    try {
      let respdata;
      await this.http.patch(this.url + 'company/update/' + id, data).forEach(data => respdata = data);
      return respdata;
    } catch (error) {
      console.log(error);
    }
  }
}
