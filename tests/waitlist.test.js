const { joinWaitlist } = require('../js/waitlist');

test('adds a normalized email without mutating the original list', function () {
  const list = ['One@example.com'];
  const result = joinWaitlist(list, '  TWO@example.COM  ');
  assertEq(JSON.stringify(result), JSON.stringify(['One@example.com', 'two@example.com']));
  assertEq(JSON.stringify(list), JSON.stringify(['One@example.com']));
});

test('invalid emails leave a copy of the list unchanged', function () {
  assertEq(JSON.stringify(joinWaitlist(['a@example.com'], 'missing-at')), JSON.stringify(['a@example.com']));
  assertEq(JSON.stringify(joinWaitlist(['a@example.com'], 'a@example')), JSON.stringify(['a@example.com']));
});

test('duplicate emails are not added again', function () {
  assertEq(
    JSON.stringify(joinWaitlist(['  USER@example.com  '], ' user@EXAMPLE.com ')),
    JSON.stringify(['  USER@example.com  '])
  );
});
