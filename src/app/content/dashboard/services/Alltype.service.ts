import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AllTypeService {
  constructor(public httpclient: HttpClient) {}

  getData() {
    return this.httpclient.get(environment.apiUrl + 'BotPress');
  }
}
