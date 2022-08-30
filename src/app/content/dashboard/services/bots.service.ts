import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bots } from 'src/app/Models/Bots';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BotsService {
  constructor(public httpclient: HttpClient) {}

  getData() {
    return this.httpclient.get(environment.apiUrl + 'Bot');
  }

  PostData(data: bots) {
    return this.httpclient.post<bots>(environment.apiUrl + 'bot', data);
  }
}
