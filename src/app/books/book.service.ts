import { EventEmitter } from '@angular/core';
import { Book } from './book.model'



export class BookService {
  bookSelected = new EventEmitter<Book>();

  // manage books
  // set priviate so can't directly access this array from outside
  private books: Book[] = [
    new Book('Atomic Habits', 'James Clear', 'Self-Improvement', "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.", 'https://m.media-amazon.com/images/I/513Y5o-DYtL._SL500_.jpg'),
    new Book('Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience', 'Brene Brown', 'Self-Improvement', 'In Atlas of the Heart, Brown takes us on a journey through eighty-seven of the emotions and experiences that define what it means to be human. As she maps the necessary skills and an actionable framework for meaningful connection, she gives us the language and tools to access a universe of new choices and second chances—a universe where we can share and steward the stories of our bravest and most heartbreaking moments with one another in a way that builds connection.', 'https://m.media-amazon.com/images/I/512eLzUcx6L._SL500_FMwebp_.jpg'),
    new Book('Breaking The Habit of Being Yourself: How to Lose Your Mind and Create a New One', 'Dr. Joe Dispenza', 'Self-Improvement', 'In Breaking the Habit of Being Yourself, renowned author, speaker, researcher, and chiropractor Dr. Joe Dispenza combines the fields of quantum physics, neuroscience, brain chemistry, biology, and genetics to show you what is truly possible.', 'https://m.media-amazon.com/images/I/51RRcIBg93L._SL500_FMwebp_.jpg')
  ];

  // return [] to get access from outside
  getBooks() {
    // w/ using slice, will return a new array w/ exact coly of the one in service file...will get a copy
    return this.books.slice();
  }
}
