import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Assets } from './assets/assets';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private httpClient: HttpClient) { }
  getAllAssets(): Observable <Array<Assets>> {
    const apiUrl = 'https://localhost:44352/api/Asset/GetAllAssets';
    return this.httpClient.get<Array<Assets>>(apiUrl);
  }
}
