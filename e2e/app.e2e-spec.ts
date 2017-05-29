import { SimpleShoppingListPage } from './app.po';

describe('simple-shopping-list App', () => {
  let page: SimpleShoppingListPage;

  beforeEach(() => {
    page = new SimpleShoppingListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
