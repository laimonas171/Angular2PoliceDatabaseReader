import { PoliceDatabasePage } from './app.po';

describe('police-database App', function() {
  let page: PoliceDatabasePage;

  beforeEach(() => {
    page = new PoliceDatabasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
