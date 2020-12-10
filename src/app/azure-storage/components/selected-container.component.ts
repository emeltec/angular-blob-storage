import { Component } from '@angular/core';
import { BlobSharedViewStateService } from '../services/blob-shared-view-state.service';

@Component({
  selector: 'app-selected-container',
  templateUrl: 'selected-container.component.html'
})
export class SelectedContainerComponent {
  selectedContainer$ = this.blobState.selectedContainer$;

  constructor(private blobState: BlobSharedViewStateService) {}
}
