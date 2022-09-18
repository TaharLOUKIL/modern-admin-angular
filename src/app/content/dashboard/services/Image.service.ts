import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from 'src/app/Models/Text';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(public httpclient: HttpClient) {}

  getData() {
    return this.httpclient.get(environment.apiUrl + 'Image');
  }

  PostData(data: Image) {
    return this.httpclient.post(environment.apiUrl + 'Image', data);
  }

  PutData(data: Image) {
    return this.httpclient.put(environment.apiUrl + 'Image', data);
  }

  DeleteData(data: Image) {
    return this.httpclient.delete(environment.apiUrl + 'Image/' + data._id);
  }
}
