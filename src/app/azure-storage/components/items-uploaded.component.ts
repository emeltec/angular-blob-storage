import { Component } from '@angular/core';
import { first, take } from 'rxjs/operators';
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
      this.blobState.uploadedItems$.pipe().subscribe( res => {
        this.filesUploads = res
        console.log("UP", this.filesUploads);
      })
    }

    
}
