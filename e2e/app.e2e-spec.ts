import { HappyTCPage } from './app.po';

describe('happy-tc App', () => {
  let page: HappyTCPage;

  beforeEach(() => {
    page = new HappyTCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
