
// Run: npm run test10

function getPropertyFooFromAll(subject) {
  // Hint: try to combine array map with property access
}

test('We can get a property foo from an object', () => {
  expect(
    getPropertyFooFromAll([
      { foo: 'example' },
      { baz: 'example' },
      {
        baz: 123,
        foo: 456,
        boz: 789
      }
    ])
  ).toEqual([
    'example',
    undefined,
    456
  ]);
});
