import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fichier } from 'src/app/Models/Texte';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FichierService {
  constructor(public httpclient: HttpClient) {}

  getData() {
    return this.httpclient.get(environment.apiUrl + 'File');
  }

  PostData(data: Fichier) {
    return this.httpclient.post(environment.apiUrl + 'File', data);
  }

  PutData(data: Fichier) {
    return this.httpclient.put(environment.apiUrl + 'File', data);
  }

  DeleteData(data: Fichier) {
    return this.httpclient.delete(environment.apiUrl + 'File/' + data._id);
  }
}
