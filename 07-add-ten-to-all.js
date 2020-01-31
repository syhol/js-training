
// Run: npm run test7

function addTenToAll(subject) {
  // Hint: try the array map method
}

test('We can add ten to each number in an array', () => {
  expect(addTenToAll([1, 2, 3])).toEqual([11, 12, 13]);
  expect(addTenToAll([41, 999, 735])).toEqual([51, 1009, 745]);
});
