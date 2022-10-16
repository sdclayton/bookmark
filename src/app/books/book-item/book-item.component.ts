import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;

  // method executed at a point in time component is set
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  // call method in service which will transfer data
  onSelected() {
    this.bookService.bookSelected.emit(this.book);
  }
}
