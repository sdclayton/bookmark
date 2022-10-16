import { Component, OnInit } from '@angular/core';

import { Book } from './book.model'
import { BookService } from './book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  // add BookService
  providers: [BookService]
})
export class BooksComponent implements OnInit {
  selectedBook: Book;

  // inject bookService
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.bookSelected
      .subscribe(
        (book: Book) => {
          this.selectedBook = book;
        }
      )
  }

}
