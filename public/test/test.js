// Tests
let convert = require('../index.js');
const { describe } = require('mocha');
const { expect } = require('chai');

describe('randomCount', () => {
  it('should return a random number between 0 and 1', () => {
    expect(convert.randomCount()).to.be.within(0, 1);
  });
  it('should return a function', () => {
    expect(convert.randomCount).to.be.a('function');
  });
});

describe('setCookie', () => {
  it('should set a cookie with a name and value', () => {
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${convert.value}; ${expires}; path=/`;
  });
  it('should return a function', () => {
    expect(convert.setCookie).to.be.a('function');
  });
  it('should return the value of the cookie', () => {
    const cookie = convert.convert.getCookie('ballColor');
    expect(cookie).to.equal('red');
  });
  it('should return null if the cookie does not exist', () => {
    const cookie = convert.convert.getCookie('ballCount');
    expect(cookie).to.equal(null);
  });
  it('should set a cookie with a name and value', () => {
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${convert.value}; ${expires}; path=/`;
  });
});

describe('getCookie', () => {
  it('should return the value of the cookie', () => {
    const cookie = convert.getCookie('ballColor');
    expect(cookie).to.equal('red');
  });
  it('should return a function', () => {
    expect(convert.getCookie).to.be.a('function');
  });
  it('should return null if the cookie does not exist', () => {
    const cookie = convert.getCookie('ballCount');
    expect(cookie).to.equal(null);
  });
});

describe('getBallColor', () => {
  it('should return the value of the cookie', () => {
    const cookie = convert.getCookie('ballColor');
    expect(cookie).to.equal('red');
  });
  it('should return a function', () => {
    expect(convert.getBallColor).to.be.a('function');
  });
  it('should return null if the cookie does not exist', () => {
    const cookie = convert.getCookie('ballCount');
    expect(cookie).to.equal(null);
  });
});

describe('incrementBallCount', () => {
  it('should return the value of the cookie', () => {
    const cookie = convert.getCookie('ballCount');
    expect(cookie).to.equal(1);
  });
  it('should return a function', () => {
    expect(convert.incrementBallCount).to.be.a('function');
  });
  it('should increment the value of the cookie ny 1', () => {
    const cookie = convert.getCookie('ballCount');
    cookie ? expect(cookie).to.equal(2) : expect(cookie).to.equal(1);
  });
});
