import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from 'src/app/Models/Text';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(public httpclient: HttpClient) {}

  getData() {
    return this.httpclient.get(environment.apiUrl + 'File');
  }

  PostData(data: File) {
    return this.httpclient.post(environment.apiUrl + 'File', data);
  }

  PutData(data: File) {
    return this.httpclient.put(environment.apiUrl + 'File', data);
  }

  DeleteData(data: File) {
    return this.httpclient.delete(environment.apiUrl + 'File/' + data._id);
  }
}
