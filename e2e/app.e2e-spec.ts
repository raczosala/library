import { LibraryPage } from './app.po';

describe('library App', () => {
  let page: LibraryPage;

  beforeEach(() => {
    page = new LibraryPage();
  });
  
  it('should have a title', () => {
    page.navigateTo();
    expect(page.getCardTitleText()).toEqual('Available Books!');
  });
  
  it('should have 0 selected books', () => {
    expect(page.getSelectedBooksText()).toEqual('# of selected books: 0');
  });
  
  it('should add one to selected books', () => {
    page.clickFirstBook();
    expect(page.getSelectedBooksText()).toEqual('# of selected books: 1');
  });
  
  it('should substract one from selected books', () => {
    page.clickFirstBook();
    expect(page.getSelectedBooksText()).toEqual('# of selected books: 0');
  });

});
