import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model'
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];

  // inject service (can do this since it's provided in the parent)
  // use private to make sure book service is imported from appropriate file (will instantly assign a property w. the same name)
  constructor(private bookService: BookService) { }

  // called once component is initialized...properties can now access & initalized..."object was created"
  ngOnInit() {
    // will get copy of book array
    this.books = this.bookService.getBooks();
  }


}
