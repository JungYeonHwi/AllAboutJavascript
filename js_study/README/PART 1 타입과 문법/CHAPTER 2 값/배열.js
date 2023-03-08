var a = [1, "2", [3]];

a.length; // 3
a[0] === 1; // true
a[2][0] === 3; // true

var a = [];
a.length; // 0

a[0] = 1;
a[1] = "2";
a[2] = [3];

a.length; // 3

var a = [];

a[0] = 1;
a["foobar"] = 2;

a.length; // 1
a["foobar"]; // 2
a.foobar; // 2

var a = [];

a["13"] = 42;
a.length; // 14
