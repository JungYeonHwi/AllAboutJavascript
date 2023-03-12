var a = 2 / "foo";
var b = -3 * 0;

Object.is(a, NaN); // true
Object.is(b, -0); // true
Object.is(b, 0); // false
