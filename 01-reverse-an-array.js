
// Run: npm run test1

function reverseArray(subject) {
  // Hint: Uncomment the line below:
  // return subject.reverse();
}

test('We can reverse an array', () => {
  expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  expect(reverseArray(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
});
