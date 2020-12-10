import { Component } from '@angular/core';
import { BlobSharedViewStateService } from '../services/blob-shared-view-state.service';

@Component({
  selector: 'app-container-list',
  templateUrl: 'container-list.component.html'
})
export class ContainerListComponent {
  
  containers$ = this.blobState.containers$;

  constructor(
    private blobState: BlobSharedViewStateService
    ) {}

  onClick(containerName: string): void {
    this.blobState.getContainerItems(containerName);
  }
}
