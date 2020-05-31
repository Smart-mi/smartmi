import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  public url = environment.api;



  constructor(private http: HttpClient) {
  }
  async getAllUnit() {
    let respdata;
    await this.http.get(this.url + 'unit/all').forEach(data => respdata = data);
    return respdata;
  }
  async addNewUnit(data) {
    let respdata;
    await this.http.post(this.url + 'unit/create', data).forEach(data => respdata = data);
    return respdata;
  }
  async editUnit(id, data) {
      let respdata;
      await this.http.patch(this.url + 'unit/update/' + id, data).subscribe(data => respdata = data);
      return respdata;
  }
  async deleteUnit(id) {
    let respdata;
    await this.http.delete(this.url + 'unit/delete/' + id).forEach(data => respdata = data);
    return respdata;
  }
}
