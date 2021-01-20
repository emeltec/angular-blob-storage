import { Component } from '@angular/core';
import { BlobUploadsViewStateService } from '../services/blob-uploads-view-state.service';

@Component({
  selector: 'app-items-uploaded',
  templateUrl: 'items-uploaded.component.html'
})
export class ItemsUploadedComponent {

  uploads$ = this.blobState.uploadedItems$;
  filesUploads = [];

  constructor(
    private blobState: BlobUploadsViewStateService
    ) {}

    ngOnInit(){
      this.blobState.uploadedItems$.subscribe( res => {
        this.filesUploads = res
        console.log(this.filesUploads);
        
      })
    }

    
}
