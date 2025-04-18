import { Component, OnInit } from '@angular/core';
import { FolderService } from '../../services/folder.service';
import { DocumentService } from '../../services/document.service';
import { Folder } from '../../models/folder.model';
import { Document } from '../../models/document.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  folders: Folder[] = [];
  selectedFile: File | null = null;
  uploadTargets: { [folderId: number]: File | null } = {};

  constructor(
    private folderService: FolderService,
    private documentService: DocumentService
  ) {}
  newFolderName: string = '';

  ngOnInit(): void {
    this.loadFolders();
  }

  loadFolders(): void {
    this.folderService.getFoldersByType('document').subscribe(data => {
      this.folders = data;
    });    
  }

  createFolder(): void {
    if (this.newFolderName.trim()) {
      const folder = { name: this.newFolderName, type: 'document' }; // ⬅️ type added
      this.folderService.createFolder(folder).subscribe(() => {
        this.newFolderName = '';
        this.loadFolders();
      });
    }
  }
  


  onFileSelected(event: any, folderId: number): void {
    const file = event.target.files[0];
    this.uploadTargets[folderId] = file;
  }

  upload(folderId: number): void {
    const file = this.uploadTargets[folderId];
    if (file) {
      this.documentService.uploadDocument(folderId, file).subscribe(() => {
        this.uploadTargets[folderId] = null;
        this.loadFolders(); 
      });
    }
  }
}
