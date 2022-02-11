//Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
  if (Math.sign(number) == +1) {
    return number - number * 2;
  } else Math.sign(number) == -1;
  return number - number * 2;
}

//ou...

function opposite(number) {
  return -number;
}

console.log(opposite(5));
console.log(opposite(-2));

//test
describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(opposite(1), -1);
  });
});
