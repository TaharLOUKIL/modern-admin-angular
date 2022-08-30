import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bots } from 'src/app/Models/Bots';
import { Texte } from 'src/app/Models/Texte';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TexteService {
  constructor(public httpclient: HttpClient) {}

  getData() {
    return this.httpclient.get(environment.apiUrl + 'Text');
  }

  PostData(data: Texte) {
    return this.httpclient.post(environment.apiUrl + 'Text', data);
  }

  PutData(data: Texte) {
    return this.httpclient.put(environment.apiUrl + 'Text', data);
  }

  DeleteData(data: Texte) {
    return this.httpclient.delete(environment.apiUrl + 'Text/' + data._id);
  }
}
