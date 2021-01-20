import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlobStorageRequest } from '../types/azure-storage';

@Injectable({
  providedIn: 'root'
})
export class SasGeneratorService {

  tokenData = {
    storageUri: "https://staceu2srecsvlsd02.blob.core.windows.net/",
    storageAccessToken: "?sv=2019-12-12&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-01-31T05:54:53Z&st=2021-01-14T21:54:53Z&spr=https&sig=Jty%2B60VBYroTzUXAiHczWyoP3e7A3Qz%2BoLUpSrfoT0A%3D"
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
