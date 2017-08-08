import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MaterialModule } from '@angular/material';

// import app components
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';
//import app services
import { ApiService } from './services/api/api.service';
import { InMemoryDataService }  from './services/in-memory/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
