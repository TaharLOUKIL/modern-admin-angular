import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bots } from 'src/app/Models/Bots';
import { Localisation } from 'src/app/Models/Localisation';
import { Texte } from 'src/app/Models/Texte';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocalisationService {
  constructor(public httpclient: HttpClient) {}

  getData() {
    return this.httpclient.get(environment.apiUrl + 'location');
  }

  PostData(data: Localisation) {
    console.log(data);
    return this.httpclient.post(environment.apiUrl + 'location', data);
  }

  PutData(data: Localisation) {
    return this.httpclient.put(environment.apiUrl + 'location', data);
  }

  DeleteData(data: Localisation) {
    return this.httpclient.delete(environment.apiUrl + 'location/' + data._id);
  }
}
