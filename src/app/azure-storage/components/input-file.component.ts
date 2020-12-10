import { Component, ElementRef, ViewChild } from '@angular/core';
import { BlobUploadsViewStateService } from '../services/blob-uploads-view-state.service';

@Component({
  selector: 'app-input-file',
  templateUrl: 'input-file.component.html'
})
export class InputFileComponent {

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef<HTMLInputElement>;

  constructor(
    private blobState: BlobUploadsViewStateService
  ) {}

  onSelected(files: FileList): void {
    this.blobState.uploadItems(files);
    this.fileInput.nativeElement.value = '';
  }

  showFileDialog(): void {
    this.fileInput.nativeElement.click();
  }
}
