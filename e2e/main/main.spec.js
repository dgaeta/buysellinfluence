'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./main.po');
  });

  it('should include intro with correct data', function() {
    expect(page.h1El.getText()).toBe('INFLUENCE');
    expect(page.introTextEl.getText()).toBe('A peer-to-peer platform for buying and selling social media influence.')
    //expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
    //expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  });

  it('should include about with correct data', function() {
    expect(page.aboutH2El.getText()).toBe('ABOUT INFLUENCE');
    expect(page.aboutFirstLineEl.getText()).toBe('It\'s no secret, if someone popular on social media raved about your new product/clothing line/blog, your business could sky rocket.');
  });

  it('should include contact with correct data', function() {
    expect(page.contactH2El.getText()).toBe('CONTACT INFLUENCE');
    expect(page.contactFirstLineEl.getText()).toBe('Feel free to email us to provide some feedback, give us suggestions, or to just say hello!');
  });
});
