import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlobStorageRequest } from '../types/azure-storage';

@Injectable({
  providedIn: 'root'
})
export class SasGeneratorService {

  tokenData = {
    storageUri: "https://cuenta69.blob.core.windows.net/",
    storageAccessToken: "sv=2019-12-12&ss=b&srt=sco&sp=rwdlacx&se=2020-12-12T12:16:17Z&st=2020-12-10T04:16:17Z&spr=https,http&sig=oxHlDI8a1B0LShDC9liveTxWu%2B2oPWRFIbhWuCyFodk%3D"
  }

  private token = new BehaviorSubject(this.tokenData)
  public tokenObs = this.token.asObservable()

  constructor( private http: HttpClient ) {}

  getSasToken(): Observable<BlobStorageRequest> {

    return this.tokenObs;
    /* 
    return this.http.get<BlobStorageRequest>(
      `${environment.sasGeneratorUrl}/api/GenerateSasToken`
    ); 
    */
  }
}



