import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManufatureService {
  public url = environment.api;

  constructor(private http: HttpClient) { }
  async getAllManufatures() {
      let respdata;
      await this.http.get(this.url + 'manufature/all').forEach(data => respdata = data);
      return respdata;
  }
  async addManufature(data) {
      let respdata;
      await this.http.post(this.url + 'manufature/create', data).forEach(data => respdata = data);
      return respdata;
  }
  async editManufature(id, brand) {
    let respdata;
    await this.http.patch(this.url + 'manufature/update/' + id, brand).forEach(data => respdata = data);
    return respdata;
  }
  async deleteMAnufature(id) {
    let respdata;
    await this.http.delete(this.url + 'manufature/delete/' + id).forEach(data => respdata = data);
    return respdata;
  }
}
