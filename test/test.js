//if (typeof window === 'undefined') return;

const jsdom = require("jsdom");
const {JSDOM} = jsdom;

let dom = new JSDOM('<!DOCTYPE html><html lang="en">' +
    '<head><meta charset="UTF-8"><title>Cardify</title>' +
    '</head><body><div class="cardify"><h2>Prueba 1</h2>' +
    '<img src="https://pbs.twimg.com/media/ClFixn2UoAA85OZ.jpg" alt="Osito">' +
    '<img src="https://78.media.tumblr.com/7abd3b7ae58a290dbf509e9c' +
    '39427f47/tumblr_mjgkiuTCQJ1s7mg7ko5_500.gif" alt="León">' +
    '<img class="img" src="http://japonpop.japonshop.com/wp-content/uploads/' +
    '2014/10/arte-latte-japon-gatos-japonshop03.png" alt="gato">' +
    '</script><script src="lib/main.js"></script></body></html>', {runScripts:"outside-only"});

const {
    window
} = dom;
global.document = dom;
global.window = window;
global.navigator = {
    userAgent: 'node.js',
};

const chai = require('chai');
var expect = require('chai').expect;
var assert = require('chai').assert;
const filterLibrary = require('../src/app.js');

describe('grayscale', () =>{
  it('deberia retornar arreglo con algo', () =>{
    assert.equal(filterLibrary.greyFunction(null), 'error');
  }); 
});

