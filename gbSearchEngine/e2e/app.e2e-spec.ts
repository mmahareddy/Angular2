import { GbSearchEnginePage } from './app.po';

describe('gb-search-engine App', function() {
  let page: GbSearchEnginePage;

  beforeEach(() => {
    page = new GbSearchEnginePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
