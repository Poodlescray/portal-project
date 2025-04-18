import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = 'http://localhost:8080/documents';

  constructor(private http: HttpClient) {}

  getAllDocuments(): Observable<Document[]> {
    const dummyFolderId = 1;
    return this.http.get<Document[]>(`${this.apiUrl}/folder/${dummyFolderId}`);
  }
  

  uploadDocument(folderId: number, file: File): Observable<Document> {
    const formData = new FormData();
    formData.append('file', file);
  
    return this.http.post<Document>(
      `${this.apiUrl}/upload/${folderId}`,
      formData
    );
  }
}
