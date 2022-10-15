import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookItemComponent } from './books/book-item/book-item.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
