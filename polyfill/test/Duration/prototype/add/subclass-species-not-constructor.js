// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.add
features: [Symbol.species]
---*/

function check(value, description) {
  const duration = Temporal.Duration.from({ days: 4, hours: 5, minutes: 6, seconds: 7, milliseconds: 987, microseconds: 654, nanoseconds: 321 });
  duration.constructor = {
    [Symbol.species]: value,
  };
  assert.throws(TypeError, () => duration.add({ nanoseconds: 1 }), description);
}

check(true, "true");
check("test", "string");
check(Symbol(), "Symbol");
check(7, "number");
check(7n, "bigint");
check({}, "plain object");
