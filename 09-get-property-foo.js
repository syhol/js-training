
// Run: npm run test9

function getPropertyFoo(subject) {
  // Hint: try property access to get foo from subject
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
}

test('We can get a property foo from an object', () => {
  expect(getPropertyFoo({foo: 'example'})).toEqual('example');
  expect(getPropertyFoo({baz: 'example'})).toEqual(undefined);
  expect(getPropertyFoo({
    baz: 123,
    foo: 456,
    boz: 789,
  })).toEqual(456);
});
