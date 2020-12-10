import { Component } from '@angular/core';
import { BlobDeletesViewStateService } from '../services/blob-deletes-view-state.service';
import { BlobDownloadsViewStateService } from '../services/blob-downloads-view-state.service';
import { BlobSharedViewStateService } from '../services/blob-shared-view-state.service';

@Component({
  selector: 'app-items-list',
  templateUrl: 'items-list.component.html'
})
export class ItemsListComponent {
  items$ = this.blobState.itemsInContainer$;

  constructor(
    private blobState: BlobSharedViewStateService,
    private blobDeletes: BlobDeletesViewStateService,
    private blobDownloads: BlobDownloadsViewStateService
  ) {}

  onDownloadClick(filename: string): void {
    this.blobDownloads.downloadItem(filename);
  }

  onDeleteClick(filename: string): void {
    this.blobDeletes.deleteItem(filename);
  }
}
