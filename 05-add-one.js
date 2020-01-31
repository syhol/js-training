
// Run: npm run test5

function addOne(subject) {
  // Hint: try the "++" mathematical operator
}

test('We can add one to a number', () => {
  expect(addOne(1)).toEqual(2);
  expect(addOne(41)).toEqual(42);
  expect(addOne(999)).toEqual(1000);
});
