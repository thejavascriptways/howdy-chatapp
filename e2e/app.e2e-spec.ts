import { HowdyChatappPage } from './app.po';

describe('howdy-chatapp App', function() {
  let page: HowdyChatappPage;

  beforeEach(() => {
    page = new HowdyChatappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
