/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
	//Test content of Intro sections 
  this.introEl = element(by.css('.intro'));
  this.introBodyEl = this.introEl.element(by.css('.intro-body'));
  this.h1El = this.introBodyEl.element(by.css('h1'));
  this.introTextEl = this.introBodyEl.element(by.css('.intro-text'));

  //Test content of About section 
  this.aboutEl = element(by.id('about'));
  this.aboutH2El = this.aboutEl.element(by.css('h2'));
  this.aboutFirstLineEl = this.aboutEl.element(by.id('about-first-line'));

  //Test content of Contact section
  this.contactEl = element(by.id('contact'));
  this.contactH2El = this.contactEl.element(by.css('h2'));
  this.contactFirstLineEl = this.contactEl.element(by.id('contact-first-line'))
};

module.exports = new MainPage();

