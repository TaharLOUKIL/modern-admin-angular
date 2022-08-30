import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataObject } from 'src/app/Models/Data';

@Injectable({
  providedIn: 'root',
})
export class DashbooardService {
  constructor(public httpclient: HttpClient) {}

  getData(id) {
    return this.httpclient.get<DataObject[]>(environment.apiUrl + 'Data/' + id);
  }

  PostData(data: DataObject) {
    return this.httpclient.post<DataObject>(environment.apiUrl + 'Data', data);
  }

  PutData(data: any) {
    return this.httpclient.put(environment.apiUrl + 'Data', data);
  }
}
