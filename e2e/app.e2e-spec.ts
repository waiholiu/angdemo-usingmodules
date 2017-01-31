import { TempAng4Page } from './app.po';

describe('temp-ang4 App', function() {
  let page: TempAng4Page;

  beforeEach(() => {
    page = new TempAng4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
