import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Folder } from '../models/folder.model';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  private apiUrl = 'http://localhost:8080/folders';

  constructor(private http: HttpClient) {}

  getAllFolders(): Observable<Folder[]> {
    return this.http.get<Folder[]>(this.apiUrl);
  }
  createFolder(folder: { name: string }): Observable<Folder> {
  return this.http.post<Folder>(this.apiUrl, folder);
}
getFoldersByType(type: string): Observable<Folder[]> {
  return this.http.get<Folder[]>(`${this.apiUrl}/type/${type}`);
}

}
