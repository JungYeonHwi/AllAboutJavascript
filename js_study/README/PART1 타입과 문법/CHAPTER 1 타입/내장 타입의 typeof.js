typeof undefined === "undefined"; // true
typeof true === "boolean"; // true
typeof 42 === "number"; // true
typeof "42" === "string"; // true
typeof { life: 42 } === "object"; // true
typeof null === "object"; // true

// ES6부터 추가
typeof Symbol() === "symbol"; // true

var a = null;
!a && typeof a === "object"; // true

typeof function a() {
  /* ... */
} === "function"; // true

typeof [1, 2, 3] === "object"; // true
