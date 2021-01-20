import { Component } from '@angular/core';
import { BlobSharedViewStateService } from '../services/blob-shared-view-state.service';

@Component({
  selector: 'app-container-list',
  templateUrl: 'container-list.component.html'
})
export class ContainerListComponent {
  
  //containers$ = this.blobState.containers$;
  casillaCliente = "azure-webjobs-secrets/fncteu2srecd02";

  constructor(
    private blobState: BlobSharedViewStateService
    ) {}

  onClick(): void {
    this.blobState.getContainerItems(this.casillaCliente);
  }
}
