var a = 42;
var b = 42.3;

var a = 0.42;
var b = 0.42;

var a = 42.0;
var b = 42;

var a = 42.300;
var b = 42.0;

a // 42.3
b; // 42

var a = 5E10;
a; // 50000000000
a.toExponential(); // "5e+10"

var a = 42.59;

a.toFixed(0); // "43"
a.toFixed(1); // "42.6"
a.toFixed(2); // "42.59"
a.toFixed(3); // "42.590"
a.toFixed(4); // "42.5900"

var a = 42.59;

a.toPrecision(1); // "4e+1"
a.toPrecision(2); // "43"
a.toPrecision(3); // "42.6"
a.toPrecision(4); // "42.59"
a.toPrecision(5); // "42.590"

