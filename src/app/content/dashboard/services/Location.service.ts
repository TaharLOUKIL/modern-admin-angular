import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from 'src/app/Models/Location';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(public httpclient: HttpClient) {}

  getData() {
    return this.httpclient.get(environment.apiUrl + 'location');
  }

  PostData(data: Location) {
    console.log(data);
    return this.httpclient.post(environment.apiUrl + 'location', data);
  }

  PutData(data: Location) {
    return this.httpclient.put(environment.apiUrl + 'location', data);
  }

  DeleteData(data: Location) {
    return this.httpclient.delete(environment.apiUrl + 'location/' + data._id);
  }
}
