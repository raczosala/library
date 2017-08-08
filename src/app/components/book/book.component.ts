import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  
  @Input() book: Book;
  @Output() onSelect = new EventEmitter<boolean>();
  selected: boolean;
  
  constructor() { 
    this.selected = false;
  }
  
  handleClick() {
    this.selected = !this.selected;
    this.onSelect.emit(this.selected);
  }
  
}
