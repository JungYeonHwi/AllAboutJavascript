var a = "abc";

a.length; // 3
a.toUpperCase(); // "abc"

var a = new Boolean(false);
if (!a) {
  console.log("Oops"); // 실행되지 않음
}

var a = "abc";
var b = new String(a);
typeof b;
("object");

b instanceof String; // true
Object.prototype.toString.call(b); // "[object String]"
