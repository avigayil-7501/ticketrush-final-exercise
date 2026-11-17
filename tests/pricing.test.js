const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('member two tickets cost 584', function () { assertEq(calcTotal(2, true), 584); });
test('member may buy up to 6', function () { assertEq(maxTickets(true), 6); });
test('member may buy exactly 6 tickets', function () { assertEq(calcTotal(6, true), 1752); });
test('member cannot buy 7 tickets', function () { assertEq(calcTotal(7, true), null); });
test('zero tickets are invalid', function () { assertEq(calcTotal(0), null); });
test('regular customers cannot buy 9 tickets', function () { assertEq(calcTotal(9), null); });
