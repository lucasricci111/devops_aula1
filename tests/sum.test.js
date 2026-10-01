const test = require('node:test');
const assert = require('node:assert');
const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
  assert.strictEqual(sum([1, 2]), 3);
});

test('adds -1 + 1 to equal 0', () => {
  assert.strictEqual(sum([-1, 1]), 0);
});

test('adds 1, 2, 3, 4, 5 to equal 15', () => {
  assert.strictEqual(sum([1, 2, 3, 4, 5]), 15);
});
