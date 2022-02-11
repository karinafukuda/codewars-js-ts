// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;
  var vowels = 'aeiou';

  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
console.log(getCount('Karina'));

//test
const chai = require('chai');
const assert = chai.assert;

describe('Case 1', function () {
  it('should be defined', function () {
    assert.strictEqual(getCount('abracadabra'), 5);
  });
});
