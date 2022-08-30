import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Audio } from 'src/app/Models/Texte';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor(public httpclient: HttpClient) {}

  getData() {
    return this.httpclient.get(environment.apiUrl + 'Audio');
  }

  PostData(data: Audio) {
    return this.httpclient.post(environment.apiUrl + 'Audio', data);
  }

  PutData(data: Audio) {
    return this.httpclient.put(environment.apiUrl + 'Audio', data);
  }

  DeleteData(data: Audio) {
    return this.httpclient.delete(environment.apiUrl + 'Audio/' + data._id);
  }
}
