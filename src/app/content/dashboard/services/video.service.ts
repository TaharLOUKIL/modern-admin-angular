import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from 'src/app/Models/Text';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(public httpclient: HttpClient) {}

  getData() {
    return this.httpclient.get(environment.apiUrl + 'Video');
  }

  PostData(data: Video) {
    return this.httpclient.post(environment.apiUrl + 'Video', data);
  }

  PutData(data: Video) {
    return this.httpclient.put(environment.apiUrl + 'Video', data);
  }

  DeleteData(data: Video) {
    return this.httpclient.delete(environment.apiUrl + 'Video/' + data._id);
  }
}
