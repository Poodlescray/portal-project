import { Document } from './document.model';

export interface Folder {
  id: number;
  name: string;
  documents: Document[];
}
