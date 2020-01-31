
// Run: npm run test8

function trimSpacesFromAll(subject) {
  // Hint: try to combine array map with string trim
}

test('We can trim each string in an array', () => {
  expect(trimSpacesFromAll([
    '    foo',
    '  baz  ',
    'bar    ',
  ])).toEqual([
    'foo',
    'baz',
    'bar',
  ]);
});
