import { ValidatorsAppPage } from './app.po';

describe('validators-app App', function() {
  let page: ValidatorsAppPage;

  beforeEach(() => {
    page = new ValidatorsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
