var a = "abc";
var b = ["a", "b", "c"];

a.length; // 3
b.length; // 3

var c = a.concat("def"); // "abcdef"
var d = b.concat(["d", "e", "f"]); // ["a", "b", "c", "d", "e", "f"]

a[1] = "z";
b[1] = "z";

a; // "abcdef"
b; // ["a", "z", "c", "d", "e", "f"]

var a = "abc";
c = a.toUpperCase();

a === c; // false
a; // "abc"
c; // "ABC"

var a = "abc";

a.join; // undefined
a.map; // undefined

var c = Array.prototype.join.call(a, "-");
c; // "a-b-c"

var d = Array.prototype.map
  .call(a, function (v) {
    return v.toUpperCase() + ".";
  })
  .join("");
d; //"A.B.C"

var a = "abc";

a.reverse(); // undefined

var c = a.split("").reverse().join("");
c; // "cba"
