
// Run: npm run test3

function joinString(subject) {
  // Hint: try the array join method
}

test('We can join a string', () => {
  expect(joinString(['h', 'e', 'l', 'l', 'o'])).toEqual('hello');
  expect(joinString(['w', 'h', 'y'])).toEqual('why');
});
