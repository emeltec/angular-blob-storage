import { Component } from '@angular/core';
import { BlobSharedViewStateService } from '../services/blob-shared-view-state.service';

@Component({
  selector: 'app-container-list',
  templateUrl: 'container-list.component.html'
})
export class ContainerListComponent {

  casillaCliente = "rawdata";
  
  containers$ = this.blobState.containers$;

  constructor(
    private blobState: BlobSharedViewStateService,
    ) {}

    ngOnInit(){
      //console.log(this.blobServiceClient.accountName)
      this.blobState.getContainerItems(this.casillaCliente);
    }

  onClick(containerName: string): void {
    
  }
}
