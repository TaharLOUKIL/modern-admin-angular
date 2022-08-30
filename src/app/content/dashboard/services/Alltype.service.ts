import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bots } from 'src/app/Models/Bots';
import { Texte } from 'src/app/Models/Texte';
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
