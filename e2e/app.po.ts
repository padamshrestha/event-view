export class EventViewPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('event-view-app h1')).getText();
  }
}
