import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  books: Book[];
  selectedBooks: number;
  
  constructor(private apiService: ApiService) {
    this.selectedBooks = 0;
  }

  ngOnInit(): void {
    this.getBooks();
  }
  
  getBooks(): void {
    this.apiService.get('books').subscribe(
      (res) => { this.books = res; }
    );
  }
  
  onSelect(selected: boolean): void {
    selected ? this.selectedBooks++ : this.selectedBooks--;
  }
  
}
