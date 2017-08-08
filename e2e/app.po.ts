import { browser, by, element } from 'protractor';

export class LibraryPage {
  navigateTo() {
    return browser.get('/');
  }

  clickFirstBook() {
    element(by.css('app-books md-list app-book:first-child md-list-item')).click();
  }

  getCardTitleText() {
    return element(by.css('app-books md-card-title h1')).getText();
  }
  
  getSelectedBooksText() {
    return element(by.css('app-books md-card-subtitle')).getText();
  }
}
