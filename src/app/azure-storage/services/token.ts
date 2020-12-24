import { InjectionToken } from '@angular/core';
import { BlobServiceClient } from '@azure/storage-blob';
import {
  BlobStorageClientFactory,
  BlobStorageRequest
} from '../types/azure-storage';

export const BLOB_STORAGE_TOKEN = new InjectionToken<BlobStorageClientFactory>(
  'BLOB_STORAGE_TOKEN'
);

export function azureBlobStorageFactory(): BlobStorageClientFactory {

  
  const buildConnectionString = (options: BlobStorageRequest) => {
    //console.log("SS", options)
    return (
      `BlobEndpoint=${options.storageUri};` +
      `SharedAccessSignature=${options.storageAccessToken}`
      );
    };

    return options => {
      console.log("CC",options)
      return BlobServiceClient.fromConnectionString(buildConnectionString(options))
    }
}
