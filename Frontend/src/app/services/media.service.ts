import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private baseUrl = 'http://localhost:8080/media';

  constructor(private http: HttpClient) {}

  // Adjusted URL to match the backend: /media/folder/{folderId}
  getMediaByFolder(folderId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/folder/${folderId}`);
  }

  // Adjusted URL to match the backend: /media/upload/{folderId}
  uploadMedia(folderId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/upload/${folderId}`, formData);
  }

  createMediaFolder(name: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/create-folder`, { name });
  }
}
