# PART 1 타입과 문법

<목차>
[# CAHPTER 1 타입](#cahpter-1-타입)
[# CHAPTER 2 값](#chapter-2-값)
[# CHAPTER 3 네이티브](#chapter-3-네이티브)

# CAHPTER 1 타입

## 1.1 타입, 그 실체를 이해하자

- 타입별로 내재된 특성을 제대로 알고 있어야 값을 다른 타입으로 변환하는 방법을 정확히 이해 가능
- 어떤 형태로든 거의 모든 자바스크립트 프로그램에서 강제변환이 일어나므로 타입을 확실하게 인지하고 사용하는 것이 중요

## 1.2 내장 타입

- 내장 타입
  - null
  - undefined
  - boolean
  - number
  - string
  - object
  - symbol(ES6부터 추가)
- null을 제외한 타입은 자신의 명칭과 동일한 문자열을 반환

```
typeof undefined === "undefined"; // true
typeof true === "boolean"; // true
typeof 42 === "number"; // true
typeof "42" === "string"; // true
typeof { life: 42 } === "object"; // true
typeof null === "object"; // true

// ES6부터 추가
typeof Symbol() === "symbol"; // true
```

- 타입으로 null 값을 정확히 확인하려면 조건이 하나 더 필요

```
var a = null;
!a && typeof a === "object"; // true
```

- typeof는 function도 반환 (function은 object의 '하위 타입' )

```
typeof function a() {
  /* ... */
} === "function"; // true
```

- 배열도 객체

```
typeof [1, 2, 3] === "object"; // true
```

## 1.3 같은 타입을 가진다

- 값에는 타입이 있지만, 변수엔 따로 타입이 없음 (변수는 언제라도, 어떤 형태의 값이라도 가질 수 있음)

```
var a = 42;
typeof a; // "number"

a = true;
typeof a; // "boolean"
```

### 1.3.1 값이 없는 vs 선언되지 않은

- 값이 없는 변수의 값은 undefined, typeof 결과는 "undefined"
- "undefined"는 접근 가능한 스코프에 변수가 선언되었으나 현재 아무런 값도 할당되지 않은 상태
- "undeclared"는 접근 가능한 스코프에 변수 자체가 선언조차 되지 않은 상태
- "undefined"나 "undeclared" typeof로 확인하면 "undefined" 결과

```
var a;
typeof a; // "undefined"

var b = 42;
var c;

b = c;

typeof b; // "undefined"
typeof c; // "undefined"
```

### 1.3.2 선언되지 않은 변수

- 임의로 정의한 변수, 내장 API 기능 체크 등에서 typeof를 통해 에러 방지 가능 (typeof 안전 가드)
- 객체의 프로퍼티를 접근할 때 그 프로퍼티가 존재하지 않아도 ReferenceError 발생하지 않음
  - 전역 windows 객체도 포함하지만 가급적 삼가하는 것이 좋음

# CHAPTER 2 값

## 2.1 배열

- 자바스크립트 배열은 문자열, 숫자, 객체, 다른 배열 등 어떤 타입의 값이라도 담을 수 있는 그릇

```
var a = [1, "2", [3]];

a.length; // 3
a[0] === 1; // true
a[2][0] === 3; // true
```

- 배열 크기는 미리 정하지 않고도 선언할 수 있으며 원하는 값을 추가하면 됨 (중간 값을 띄워 넘기는 것을 지양)

```
var a = [];
a.length; // 0

a[0] = 1;
a[1] = "2";
a[2] = [3];

a.length; // 3
```

- 배열 인덱스는 숫자지만, 배열 자체도 하나의 객체이기에 키/프로퍼티 문자열을 추가 가능

```
var a = [];

a[0] = 1;
a["foobar"] = 2;

a.length; // 1
a["foobar"]; // 2
a.foobar; // 2
```

- 키로 넣은 문자열 값이 표준 10진수 숫자로 바뀌면 문자열 키가 아닌 숫자 키를 사용한 것과 같은 결과가 나타남

```
var a = [];

a["13"] = 42;
a.length; // 14
```

### 2.1.1 유사 배열

- 유사 배열 값을 배열 유틸리티 함수(indexOf(), concat(), forEach() 등)를 사용하여 진짜 배열로 바꾸기 가능
- 예시로 DOM 쿼리 작업을 수행하면 배열은 아니지만 유사 배열 형태의 DOM 원소 리스트가 반환됨
- 함수에서 arguments 객체를 사용하여 인자를 리스트로 가져오는 것도 가능 -> slice() 함수의 기능을 차용하는 방법을 가장 많이 사용

```
function foo() {
  var arr = Array.prototype.slice.call(arguments);
  arr.push("bam");
  console.log(arr);
}

foo("bar", "baz"); // ["bar", "baz", "bam"]
```

- ES6부터는 기본 내장 함수 Array.from()이 이 일을 대신

```
var arr = Array.from(arguments);
```

## 2.2 문자열

- 문자열과 배열은 생김새는 비슷하지만 문자열은 불변 값, 배열은 가변 값

```
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
```

- 문자열을 값을 접근하려면 원칙적으로는 a.charAt() 이용
- 문자열은 불변 값이므로 문자열 메서드는 그 내용을 바로 변경하지 않고 항상 새로운 문자열을 생성한 후 반환함 (대부분의 배열 메서드는 그 자리에서 곧바로 원소를 수정함)

```
var a = "abc";
c = a.toUpperCase();

a === c; // false
a; // "abc"
c; // "ABC"
```

- 문자열을 다룰 때 유용한 대부분의 배열 메서드는 사실상 문자열에 쓸 수 없지만, 문자열에 대한 불변 배열 메서드를 빌려 쓸 수 있음

```
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
```

- 문자열의 순서를 거꾸로 뒤집기 위해서 배열로 바꾸고 원하는 작업을 수행한 후 다시 문자열로 되돌림 (배열의 가변 메서드 reverse() 이용)

```
var a = "abc";

a.reverse(); // undefined

var c = a.split("").reverse().join("");
c; // "cba"
```

## 2.3 숫자

- 자바스크립트 숫자 타입은 number가 유일하며 정수, 부동 소수점 숫자를 모두 아우름

### 2.3.1 숫자 구문

- 자바스크립트 숫자 리터럴은 10진수 리터럴로 표시됨

```
var a = 42;
var b = 42.3;
```

- 소수점 앞 정수가 0이거나 소수점 이하가 0일 때 생략 가능

```
var a = 0.42;
var b = 0.42;

var a = 42.0;
var b = 42;
```

- 대부분의 숫자는 10진수가 디폴트고 소수점 이하 0은 뗌
- 아주 크거나 아주 작은 숫자는 지수형으로 표시하며, toExponential() 메서드의 결과값과 동일

```
var a = 42.300;
var b = 42.0;

a // 42.3
b; // 42

var a = 5E10;
a; // 50000000000
a.toExponential(); // "5e+10"
```

- 숫자 값은 Number 객체 래퍼로 박싱할 수 있기 때문에 Number.prototype 메서드로 접근 가능

  - toFixed() 메서드는 지정한 소수점 이하 자릿수까지 숫자를 나타냄

  ```
  var a = 42.59;

  a.toFixed(0); // "43"
  a.toFixed(1); // "42.6"
  a.toFixed(2); // "42.59"
  a.toFixed(3); // "42.590"
  a.toFixed(4); // "42.5900"
  ```

  - toPrecision()는 유효 숫자 개수를 지정 가능

  ```
  var a = 42.59;

  a.toPrecision(1); // "4e+1"
  a.toPrecision(2); // "43"
  a.toPrecision(3); // "42.6"
  a.toPrecision(4); // "42.59"
  a.toPrecision(5); // "42.590"
  ```

- 숫자 리터럴은 2진, 8진, 16진 등 다른 진법으로도 나타낼 수 있음 (0x, 0b, 0o 로 표시하는 것을 지향)

### 2.3.2 작은 소수 값

- 이진 부동 소수점으로 나타낸 값들에서는 주의해서 사용

### 2.3.3 안전한 정수 범위

- 정수는 Number.MAX_VALUE보다 훨씬 작은 수준에서 안전 값의 범위가 정해져 있음 : 정수는 최대 2^53-1 로 표현 가능
- ES6에서는 최대는 Number.MAX_SAGE_INTEGER, 최소는 Number.MIN_SAFE_INTEGER로 정의

### 2.3.4 정수인지 확인

- ES6부터는 Number.isInteger()로 어떤 값의 정수 여부 확인

```
Number.isInteger(42); // true
Number.isInteger(423000); // true
Number.isInteger(42.3); // true
```

- 안전한 정수 여부는 ES6부터 Number.isSafeInteger()로 체크

```
Number.isSafeInteger(Number.MAX_SAFE_INTEGER); // true
```

### 2.3.5 32비트 (부호 있는) 정수

- 32비트 숫자에만 가능한 연산이 있으므로 범위는 줄어듦

## 2.4 특수 값

### 2.4.1 값 아닌 값

- undefined 타입의 값은 undefined (undeinfed는 값을 아직 가지지 않은 것)
- null 타입의 값은 null (예전에 값이 있었지만 지금은 없는 상태 = 빈 값)

### 2.4.2 Undefined

- undefined란 이름을 가진 지역 변수를 생성할 수는 있지만 지양
- void 연산자
  - undefined는 내장 식별자로, 값은 undefined지만, 값은 void 연산자로도 얻을 수 있음
  - void 연산자는 어떤 표현식의 결괏값이 없다는 걸 확실히 밝혀야 할 때 필요

### 2.4.3 특수 문자

- 수학 연산 시 두 피연산자가 전부 숫자가 아닐 경우 유효한 숫자가 나올 수 없으므로 결과로 NaN
- NaN은 경계값의 일종으로 숫자 집합 내에서 특별한 종류의 에러 상황을 나타냄
- NaN은 내장 전역 유틸리티 isNaN()을 통해 NaN 여부를 알 수 있음
- 자바스크립트에서 0으로 나누기 연산에서의 오류는 Infinity라는 결괏값 발생
- +0, -0은 동일하게 0이지만 어떤 변숫값이 0에 도달하여 부호가 바뀌는 순간, 그 직전까지 이 변수의 이동 방향을 나타냄 (잠재적인 정보 소실을 방지하기 위해 0의 부호를 보존)

### 2.4.4 특이한 동등 비교

- ES6에서 두 값이 절대적으로 동등한지 확인 할 수 있도록 Object.is() 존재

```
var a = 2 / "foo";
var b = -3 * 0;

Object.is(a, NaN); // true
Object.is(b, -0); // true
Object.is(b, 0); // false
```

## 2.5 값 vs 레퍼런스

- 자바스크립트에서 레퍼런스 값을 가리키므로 서로 다른 n 개의 레퍼런스가 있다면 이들은 저마다 항상 공유된 단일 값을 개별적으로 참조
- 자바스크립트에서 값 또는 레퍼런스의 할당 및 전달을 제어하는 구문 암시가 없음

```
var a = 2;
var b = a; // 'b'는 언제나 'a'에서 값을 복사

b++;

a; // 2
b; // 3

var c = [1, 2, 3];
var d = c; // 'd'는 공유된 '[1, 2, 3]' 값의 레퍼런스

d.push(4);
c; // [1, 2, 3, 4]
d; // [1, 2, 3, 4]
```

- null, undefined, string, number, boolean, symbol 같은단순 값은 언제나 값-복사 방식으로 할당/전달 됨
- 객체나 함수 등 합성 값은 할당/전달 시 반드시 레퍼런스 사본 생성
- 값-복사 또는 레퍼런스-복사를 결정하는 것은 값의 타입 -> 사용할 값 타입을 잘 정해서 간접적으로 할당/전달 로직에 반영해야 함

# CHAPTER 3 네이티브

- 네이티브 : 내장 함수
- 가장 많이 쓰는 네이티브
  - String()
  - Number()
  - Boolean()
  - Array()
  - Object()
  - Function()
  - RegExp()
  - Date()
  - Error()
  - Symbol()
- 네이티브는 생성자처럼 사용할 수는 있지만 그렇지 않음

```
var a = new String("abc");

typeof a; // object (stirng 이 아님)
```

## 3.1 내부 [[Class]]

- typeof 가 'object'인 값에는 `[[Class]]`라는 내부 프로피터가 추가로 붙음
  - 직접 접근할 수 없음
  - Object.prototype.toString()라는 메서드에 값을 넣어 호출

```
Object.prototype.toString.call([1, 2, 3]); // "[object Array]"
Object.prototype.toString.call(/regex-literal/i); // "[object RegExp]"
```

- Null(), Undefined() 같은 네이티브 생성자는 없지만 내부 `[[Class]]` 값은 "Null", "Undefined"임

## 3.2 래퍼 박싱하기

- 객체 래퍼 원시 값엔 프로퍼티나 메서드가 없으므로, .length, .toString()으로 접근하려면 원시 값을 객체 래퍼로 감싸줘야 함
- 자바스크립트는 원시 값을 알아서 박싱함

```
var a = "abc";

a.length; // 3
a.toUpperCase(); // "abc"
```

### 3.2.1 객체 래퍼의 함정

- 수동으로 원시 값을 박싱하려면 Object() 함수를 이용

```
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
```

- 객체 래퍼로 직접 박싱하는 것은 지향

## 3.3 언박싱

- 객체 래퍼의 원시 값은 valueOf() 메서드로 추출

```
var a = new String("abc");
var b = new Number(42);
var c = new Boolean(true);

a.typeOf(); // "abc"
b.typeOf(); // 42
c.typeOf(); // true
```

## 3.4 네이티브, 나는 생성자다

- 배열, 객체, 함수, 정규식 값은 리터럴 형태로 생성하는 것이 일반적이지만, 리터럴은 생성자 형식으로 만든 것과 동일한 종류의 객체를 생성
- 생성자는 지향

### 3.4.1 Array()

- Array 생성자는 인자로 숫자를 하나만 받으면 그 숫자를 원소로 하는 배열을 생성하는 것이 아니라 배열의 크기를 미리 정하는 것

```
var a = new Array(1, 2, 3);
a; // [1, 2, 3]

var b = [1, 2, 3];
b; // [1, 2, 3]

var c = new Array(3);
c.length; // 3
```

### 3.4.2 Object(), Function(), and RegExp()

- new Object() 같은 생성자 폼은 리터럴 형태로 한 번에 여러 프로퍼티를 지정할 수 있기에 지양
- Function 생성자는 함수의 인자나 내용을 동적으로 정의해야 하는, 매우 드문 경우에 한해 유용
- 정규 표현식은 리터럴 형식(/^a\*b+/g)으로 정의할 것을 권장

### 3.4.3 Date() and Error()

- date 객체 값은 new Date()로 생성 -> 날짜/시각을 인자로 받음
- date 객체는 유닉스 타임스탬프 값을 얻는 용도로 가장 많이 사용

### 3.4.4 Symbol()

- 심벌의 실제 값을 보거나 접근하는 것은 불가능
- Symbol.create, Symbol.iterator 등 Symbol 함수 객체의 정적 프로퍼티로 접근

### 3.4.5 네이티브 프로토타입

- 내장 네티이브 생성자는 각자의 .prototype 객체를 가짐 (해당 객체의 하위 타입별로 고유한 로직이 담겨 있음)
- .prototype들은 이미 생성되어 내장된 상태이므로 단 한 번만 생성됨
