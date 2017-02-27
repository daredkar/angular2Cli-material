import { Angular2CliMaterialPage } from './app.po';

describe('angular2-cli-material App', () => {
  let page: Angular2CliMaterialPage;

  beforeEach(() => {
    page = new Angular2CliMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
