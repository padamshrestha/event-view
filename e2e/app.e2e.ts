import {EventViewPage} from './app.po';

describe('event-view App', function() {
  let page: EventViewPage;

  beforeEach(() => {
    page = new EventViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('event-view works!');
  });
});
