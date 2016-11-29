import { TmjsleeptherapycentrePage } from './app.po';

describe('tmjsleeptherapycentre App', function() {
  let page: TmjsleeptherapycentrePage;

  beforeEach(() => {
    page = new TmjsleeptherapycentrePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
