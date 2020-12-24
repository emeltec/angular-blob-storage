import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlobStorageRequest } from '../types/azure-storage';

@Injectable({
  providedIn: 'root'
})
export class SasGeneratorService {

  /* tokenData = {
    storageUri: "https://cuenta69.blob.core.windows.net/",
    storageAccessToken: "?sv=2019-12-12&ss=b&srt=sco&sp=rwdlacx&se=2020-12-29T06:19:38Z&st=2020-12-23T22:19:38Z&spr=https,http&sig=X0IBKgj5wx3a06%2BMkZcrPK5eUkfdhUKLiwx52LdFiyA%3D"
  } */
  tokenData = {
    storageUri: "https://blobstoragedesarrollobcp.blob.core.windows.net/",
    storageAccessToken: "?sv=2019-12-12&ss=bfqt&srt=sco&sp=rwdlacupx&se=2020-12-29T12:00:27Z&st=2020-12-24T04:00:27Z&spr=https&sig=saxvw8iW9IdFTFbX%2BTwqHpkcfrPnWQPX0bSN5XyUYtI%3D"
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



