function foo() {
  a = a + 1;
}

var a = 1;
foo(); // 결괏값 : "undefined", 부수 효과 : "a"가 변경됨

var a = 42;
var b = a++;

a; // 43
b; // 42
