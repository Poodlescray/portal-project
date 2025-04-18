import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { FolderService } from '../../services/folder.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Media } from '../../models/media.model';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  folders: any[] = []; 
  selectedFiles: { [key: string]: File | null } = {}; 
  newFolderName: string = ''; 

  constructor(
    private mediaService: MediaService,
    private folderService: FolderService
  ) {}

  ngOnInit(): void {
    this.loadFolders(); 
  }

  loadFolders(): void {
    this.folderService.getFoldersByType('media').subscribe(data => {
      this.folders = data;
    });
  }

  onFileSelected(event: any, folderId: number): void {
    const file = event.target.files[0];  
    this.selectedFiles[folderId] = file;  
  }

  upload(folderId: number): void {
    const file = this.selectedFiles[folderId];
    if (file) {
      this.mediaService.uploadMedia(folderId, file).subscribe(() => {
        this.selectedFiles[folderId] = null;  
        this.loadFolders(); 
      });
    }
  }

  createFolder(): void {
    if (this.newFolderName.trim()) {
      const folder = { name: this.newFolderName, type: 'media' }; 
      this.folderService.createFolder(folder).subscribe(() => {
        this.newFolderName = '';
        this.loadFolders();
      });
    }
  }
  
}
