import { ProjetoUmPage } from './app.po';

describe('projeto-um App', function() {
  let page: ProjetoUmPage;

  beforeEach(() => {
    page = new ProjetoUmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
