import { LearnRxjsNg2Page } from './app.po';

describe('learn-rxjs-ng2 App', () => {
  let page: LearnRxjsNg2Page;

  beforeEach(() => {
    page = new LearnRxjsNg2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
