
// Run: npm run test6

function addTen(subject) {
  // Hint: try the "+" mathematical operator with the literal 10
}

test('We can add ten to a number', () => {
  expect(addTen(1)).toEqual(11);
  expect(addTen(41)).toEqual(51);
  expect(addTen(999)).toEqual(1009);
});
