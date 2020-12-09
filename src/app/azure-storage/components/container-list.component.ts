import { Component } from '@angular/core';
import { BlobSharedViewStateService } from '../services/blob-shared-view-state.service';

@Component({
  selector: 'app-container-list',
  template: `
    <h3>Contenedores:</h3>
    <div *ngFor="let container of containers$ | async">
      {{ container.name }}
      <button class="btn btn-success btn-sm" 
      (click)="onClick(container.name)">Ver archivos</button>
    </div>
  `
})
export class ContainerListComponent {
  containers$ = this.blobState.containers$;

  constructor(private blobState: BlobSharedViewStateService) {}

  onClick(containerName: string): void {
    this.blobState.getContainerItems(containerName);
  }
}
