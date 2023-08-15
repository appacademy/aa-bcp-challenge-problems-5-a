const assert = require('assert');

const isPassing = require('../problems/1-is-passing.js');
const variableNameify = require('../problems/2-variable-nameify.js');
const reverse2D = require('../problems/3-reverse-2d.js');
const productCallback = require('../problems/4-product-callback.js');
const greaterCallback = require('../problems/5-greater-callback.js');

describe('isPassing()', function () {
  it('should return a boolean indicating whether the average assessment score is at least 70', function () {
    const actual1 = isPassing([
      { number: 1, score: 60 },
      { number: 2, score: 90 },
      { number: 3, score: 80 },
      { number: 4, score: 100 },
      { number: 5, score: 85 },
    ]);
    const expected1 = true;
    assert.deepEqual(actual1, expected1);

    const actual2 = isPassing([
      { number: 1, score: 60 },
      { number: 2, score: 20 },
      { number: 3, score: 45 },
    ]);
    const expected2 = false;
    assert.deepEqual(actual2, expected2);
  });
});

describe('variableNameify()', function () {
  it('should return a string representing the mixedCased variable name obtained by combining the given words', function () {
    assert.equal(variableNameify(['is', 'prime']), 'isPrime');
    assert.equal(
      variableNameify(['remove', 'last', 'vowel']),
      'removeLastVowel'
    );
    assert.equal(variableNameify(['MaX', 'VALUE']), 'maxValue');
  });
});

describe('reverse2D()', function () {
  it('should return a string representing the elements of the array in reverse order', function () {
    const actual1 = reverse2D([
      ['a', 'b', 'c', 'd'],
      ['e', 'f'],
      ['g', 'h', 'i'],
    ]);
    const expected1 = 'ihgfedcba';
    assert.equal(actual1, expected1);

    const actual2 = reverse2D([
      ['Julian', 'Matt', 'Mike'],
      ['Oscar', 'Patrick'],
    ]);
    const expected2 = 'PatrickOscarMikeMattJulian';
    assert.equal(actual2, expected2);
  });
});

describe('productCallback()', function () {
  it('should return the result of the callback when passed the product of the two numbers', function () {
    assert.equal(productCallback(-2, 6, Math.abs), 12);
    assert.equal(productCallback(12, 3, Math.sqrt), 6);
  });
});

describe('greaterCallback()', function () {
  it('should return the result of the callback when passed the product of the two numbers', function () {
    assert.equal(greaterCallback(25, Math.abs, Math.sqrt), 25);
    assert.equal(greaterCallback(16.6, Math.floor, Math.ceil), 17);
  });
});
