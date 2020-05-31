import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url = environment.api;

  constructor(private http: HttpClient) { }

  async getAllUser() {
    try {
      let respdata;
      await this.http.get(this.url + 'user/all').forEach(data => respdata = data);
      return respdata;
    } catch (error) {
      console.log(error);
    }
  }
  async addUser(user) {
    try {
      let respdata;
      await this.http.post(this.url + 'user/create', user).forEach(data => respdata = data);
      return respdata;
    } catch (error) {
      console.log(error);
    }
  }
  async editUser(id, user) {
    try {
      let respdata;
      await this.http.patch(this.url + 'user/update/' + id, user).forEach(data => respdata = data);
      return respdata;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteUser(id) {
    try {
      let respdata;
      await this.http.delete(this.url + 'user/delete/' + id ).forEach(data => respdata = data);
      return respdata;
    } catch (error) {
      console.log(error);
    }
  }
}
