import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AssignAsset } from './assign-asset/assign-asset';
import { Observable } from 'rxjs';
import { AssignedAssets } from './assigned-assets/assigned-assets';

@Injectable({
  providedIn: 'root'
})
export class AssignAssetService {
  @Output() assignedAsset: EventEmitter<AssignedAssets> = new EventEmitter();
  selectedAsset;
  constructor(private httpClient: HttpClient) { }

  assignAsset(asset: AssignAsset): Observable<any> {
      const apiUrl = 'https://localhost:44352/api/AssignAsset/AssignAssetToUser/';
      const body = JSON.stringify(asset);
      const header = new HttpHeaders().set('Content-Type', 'application/json');
      return this.httpClient.post<any>(apiUrl, body,  {headers: header, observe: 'response'});
  }
  updateAssignedAsset(asset: AssignAsset): Observable<any> {
    const apiUrl = 'https://localhost:44352/api/AssignAsset/UpdateAssignAsset/';
    const body = JSON.stringify(asset);
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(apiUrl, body, {headers: header, observe: 'response'});
  }
  getAssignedAssets(): Observable<Array<AssignedAssets>> {
    const apiUrl = 'https://localhost:44352/api/AssignAsset/GetAssignedAsset/';
    return this.httpClient.get<Array<AssignedAssets>>(apiUrl);
  }
  setAssignedAsset(asset: AssignedAssets) {
    this.assignedAsset.emit(asset);
    this.selectedAsset = asset;
  }
  getAssignedAsset() {
    return this.selectedAsset;
  }
}
