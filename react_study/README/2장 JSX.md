# 2장 JSX

## 2.1 코드 이해하기

- 리액트로 만든 프로젝트의 JS 파일에서는 import를 사용하여 다른 파일들을 불러와 사용 가능
- 번들 : 파일을 묶듯이 연결 -> 브라우저에서도 사용하기 위해 번들러 사용 ex) 웹팩, Parcel, borwserify 도구
- 프로젝트에서 컴포넌트를 렌더링하면 함수에서 반환하고 있는 내용을 나타냄 -> 이런 코드를 JSX라고 부름

## 2.2 JSX란?

- JSX 형식으로 작성한 코드는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 JS 형태의 코드로 변환

```
function App() {
  return (
    <div>
        Hello <b>react</b>
    </div>
  );
}
```

이렇게 작성된 코드는 다음과 같이 변환

```
function App() {
  return React.createElement("div", null, "Hello", React.createElement("b", null, "react"));
}
```

JSX를 사용하면 매우 편하게 UI를 렌더링 가능

## 2.3 JSX의 장점

### 2.3.1 보기 쉽고 익숙하다

### 2.3.2 더욱 높은 활용도

## 2.4 JSX 문법

### 2.4.1 감싸인 요소

- 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 함 -> Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 함

```
    <div>
      <h1>리액트 안녕!</h1>
      <h1>잘 작동하니?</h1>
    </div>
```

나

```
import { Fragment } from "react";

<div>
    <Fragment>리액트 안녕!</Fragment>
    <Fragment>잘 작동하니?</Fragment>
</div>
```

div태그나 Fragment 태그로 감싸면 됨

### 2.4.2 자바스크립트 표현

- JS 표현식을 작성하려면 JSX 내부에서 코드를 { }로 감싸면 됨

```
const name = '리액트';

<h1>{name} 안녕!</h1>
<h1>잘 작동하니?</h1>

```

### 2.4.3 if 문 대신 조건부 연산자

- JSX 내부의 JS 표현식에서 if 문 사용 불가능
- JSX 밖에서 if 문을 사용하여 사전에 값을 설정하거나, { } 안에 조건부 연산자 사용

```
{name === "리액트" ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다.</h1>}
```

- 조건부 연산자 = 삼항 연산자 (같은 말)

### 2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링

- && 연산자를 사용해서 조건부 렌더링 가능

```
<div>{name === "리액트" && <h1>리액트입니다.</h1>}</div>
```

- null을 렌더링하면 아무것도 보여주지 않음

```
{name === "리액트" ? <h1>리액트입니다.</h1> : null}
```

### 2.4.5 undefined를 렌더링하지 않기

- 리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황 X

```
const name = undefined;
return <div>name</div>;
```

- JSX 내부에서 undefined를 렌더링은 가능

```
const name = undefined;
return <div>{name}</div>;
```

### 2.4.6 인라인 스타일링

- DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어줘야 함

```
const name = "리액트";
const style = {
    backgroundColor: "black", // 카멜 표기법으로 작성됨
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16, // 단위를 생략하면 px로 지정됨
};
return <div style={style}>{name}</div>;
```

- 미리 선언하지 않고 바로 style 값을 지정 가능

```
const name = "리액트";
return (
    <div
      style={{
        backgroundColor: "black", // 카멜 표기법으로 작성됨
        color: "aqua",
        fontSize: "48px",
        fontWeight: "bold",
        padding: 16, // 단위를 생략하면 px로 지정됨
      }}
    >
    {name}
    </div>
);
```

### 2.4.7 class 대신 className

JSX에서는 class가 아닌 className으로 설정

```
# App.css
.react {
  background: aqua;
  color: black;
  font-size: 48px;
  font-weight: bold;
  padding: 16px;
}
```

```
# App.js
import "./App.css";

function App() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}

export default App;

```

### 2.4.8 꼭 닫아야 하는 태그

- JSX에서 태그를 닫지 않으면 오류 발생
- 태그 사이에 별도의 내용이 들어가지 않는 경우에는 self-closing 태그 가능

```
<input />
```

### 2.4.9 주석

```
{/* ~ */}
```

이용