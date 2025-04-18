import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './components/documents/documents.component';
import { MediaComponent } from './components/media/media.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { MessageBoardsComponent } from './components/message-boards/message-boards.component';
import { DataListsComponent } from './components/data-lists/data-lists.component';
import { FormsComponent } from './components/forms/forms.component';
import { TagsComponent } from './components/tags/tags.component';
import { ContentComponent } from './components/content/content.component';
import { WebContentComponent } from './components/web-content/web-content.component';

export const routes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  { path: 'documents', component: DocumentsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'message-boards', component: MessageBoardsComponent },
  { path: 'data-lists', component: DataListsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'content', component: ContentComponent },
  { path: 'web-content', component: WebContentComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
