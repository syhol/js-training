
// Run: npm run test4

function reverseString(subject) {
  // Hint: Combine string split, array reverse and array join
}

test('We can reverse a string', () => {
  expect(reverseString('hello')).toEqual('olleh');
  expect(reverseString('goodbye')).toEqual('eybdoog');
  expect(reverseString('What is it?')).toEqual('?ti si tahW');
});
