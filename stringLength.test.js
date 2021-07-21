const stringLength = require('./stringLength');


test('Properly sets string length', () => {
  expect(stringLength('hello')).toBe(5);
});

