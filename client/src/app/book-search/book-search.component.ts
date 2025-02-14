import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BookService } from '../service/book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
  providers: [BookService]
})
export class BookSearchComponent implements OnInit {
  results: Book[];
  allBooks: Book[];
  searchTerm = new Subject<string>();
  searching = false;

  constructor(private bookService: BookService) {
    this.bookService.search(this.searchTerm)
    .subscribe(results => {
      console.log(results);
      this.results = results;
      this.searching = false;
    });
 }

 search(){
   console.log('we searching');
   this.searching = true;
 }

  ngOnInit() {
    this.bookService.findAll().subscribe(data => {
      this.allBooks = data;
      console.log(this.allBooks);
    });
  }

}
