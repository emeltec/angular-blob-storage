import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlobServiceClient } from '@azure/storage-blob';
import { AppComponent } from './app.component';
import { AzureStorageModule } from './azure-storage/azure-storage.module';
import { HeaderComponent } from './layout/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AzureStorageModule],
  providers: [
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
