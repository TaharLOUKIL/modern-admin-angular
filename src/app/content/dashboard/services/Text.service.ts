import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Text } from 'src/app/Models/Text';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  constructor(public httpclient: HttpClient) {}

  getData() {
    return this.httpclient.get(environment.apiUrl + 'Text');
  }

  PostData(data: Text) {
    return this.httpclient.post(environment.apiUrl + 'Text', data);
  }

  PutData(data: Text) {
    return this.httpclient.put(environment.apiUrl + 'Text', data);
  }

  DeleteData(data: Text) {
    return this.httpclient.delete(environment.apiUrl + 'Text/' + data._id);
  }
}
