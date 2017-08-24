import { Angular4ZoomCanvasPage } from './app.po';

describe('angular4-zoom-canvas App', () => {
  let page: Angular4ZoomCanvasPage;

  beforeEach(() => {
    page = new Angular4ZoomCanvasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
