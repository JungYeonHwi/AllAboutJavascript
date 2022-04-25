# 1장 리액트 시작

## 1.1 왜 리엑트인가?

### 1.1.1 리액트 이해

- View만 신경 쓰는 라이브러리
- 특정 부분이 어떻게 생길지 정하는 선언체 : 컴포넌트
- 컴포넌트는 재사용이 가능한 API로 수많은 기능들을 내장
- 컴포넌트 하나에서 해당 컴포넌트의 생김새와 작동 방식 정의
- 렌더링 : 사용자 화면에 뷰를 보여주는 것
- 리액트 컴포넌트가 최초로 실행한 '초기 렌더링'과 컴포넌트의 데이터 변경으로 다시 실행되는 '리렌더링'

#### 1.1.1.1 초기 렌더링

- render() 함수 : 컴포넌트가 어떻게 생겼는지 정의하는 역할 -> html 형식의 문자열을 반환하지 않고, 뷰가 어떻게 생겼고 어떻게 작동하는지에 대한 정보를 지닌 객체 반환

#### 1.1.1.2 조화 과정

- 컴포넌트는 데이터를 업데이트했을 때 단순히 업데이트한 값을 수정하는 것이 아니라, 새로운 데이터를 가지고 render 함수를 또 다시 호출
- render 함수가 반환하는 결과를 곧바로 DOM에 반영하지 않고, 이전에 render 함수가 만들었던 컴포넌트 정보와 현재 render 함수가 만든 컴포넌트 정보를 비교하여 차이를 알아내 DOM 트리 업데이트

## 1.2 리액트의 특징

### 1.2.1 Virtual DOM

#### 1.2.1.1 DOM이란?

- DOM (Documnet Object Model) : 객체로 문서 구조를 표현하는 방법 -> XML이나 HTML로 작성
- DOM은 동적 UI에 최적화 되어 있지 않기 때문에 JS를 이용하여 동적으로 만들기 가능
- DOM은 데이터를 표현하는 요소들이 많기 때문에 느려지는 것이지 자체는 느린 것이 아님 -> - DOM을 최소한으로 조작하여 작업을 처리하는 방식으로 개선 가능
- Virtual DOM 방식을 사용하여 DOM 업데이트를 추상화함으로써 DOM 처리 횟수를 최소화하고 효율적으로 진행

#### 1.2.1.2. Virtual DOM

- 실제 DOM에 접근하여 조작하는 대신, 추상화한 JS 객체를 구성하여 사용
  1. 데이터를 업데이트하면 전체 UI를 대신 Virtual DOM에 리렌더링
  2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교
  3. 바뀐 부분만 실제 DOM에 적용
- Virtual DOM은 UI를 업데이트 하는 과정에서 생기는 복잡함을 모두 해소, 더욱 쉽게 업데이트에 접근 가능

### 1.2.2 기타 특징

- React는 뷰만 담당하기 때문에 기타 기능은 직접 구현해야 함 (라이브러리일 뿐임)
  ex) 라우팅 : 리액트 라우터 / Ajax 처리 : axiox, fetch / 상태 관리 : 리덕스, MobX
- React는 다른 웹 프레임워크나 라이브러리와 혼용 가능
  ex) Backbone.js, AngularJS

## 1.3 작업 환경 설정

### 1.3.1 Node.js와 npm

- Node.js는 크롬 V8 JS 엔진으로 빌드한 JS 런타임
- Node.js 패키지 매니저 도구 : npm -> 개발자가 만든 패키지 설치하고 설치한 패키지 버전 관리 가능

### 1.3.2 yarn

- npm을 대체할 수 있는 도구로서 npm보다 더 빠르며 효율적인 캐시 시스템과 기타 부가 기능 제공

### 1.3.5 create-react-app으로 프로젝트 생성하기

- create-react-app은 리액트 프로젝트를 생성할 때 필요한 웹팩, 바벨의 설치 및 설정 과정을 생략하고 바로 간편하게 프로젝트 작업 환경을 구축해 주는 도구

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

# 3장 컴포넌트

## 3.1 클래스형 컴포넌트

- 컴포넌트를 선언하는 방식은 두 가지
  - 함수 컴포넌트
  - 클래스형 컴포넌트
- 클래스형 컴포넌트의 경우 state 기능 및 라이프 사이클 기능을 사용할 수 있고 임의 메서드를 정의 가능

```
import { Component } from "react";

class App extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}

export default App;
```

- 클래스형 컴포넌트는 render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야 함
- 함수 컴포넌트
  - 장점 : 선언 쉬움, 메모리 자원 덜 사용, 결과물의 파일 크기가 더 작음
  - 단점 : state와 라이프사이클 API 사용이 불가능했지만, Hooks라는 기능이 도입되면서 해결됨

## 3.2 첫 컴포넌트 생성

### 3.2.3 src 디렉터리에 MyComponent.js 파일 생성

```
const MyComponent = () => {
  return <div>나의 새롭고 멋진 컴포넌트</div>;
};
```

### 3.2.3 모듈 내보내기 및 불러오기

#### 3.2.3.1 모듈 내보내기(export)

```
export default MuComponent;
```

#### 3.2.3.2 모듈 불러오기(import)

```
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent />;
};

export default App;
```

## 3.3 props

- props는 컴포넌트 속성을 설정할 때 사용하는 요소
- props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정 가능

### 3.3.1 JSX 내부에서 props 렌더링

```
const MyComponent = props => {
    return <div>안녕하세요. 제 이름은 {props.name}</div>;
};

export default MyComponent;
```

### 3.3.2 컴포넌트를 사용할 때 props 값 지정하기

부모 컴포넌트에서 설정

```
<MyComponent name="react" />
```

### 3.3.3 props 기본값 설정 : defaultProps

defaultProps : props 값을 따로 지정하지 않았을 때 보여 줄 기본값을 설정\

```
# MyComponent.js

MyComponent.defaultProps = {
  name: "기본 이름",
};
```

### 3.3.4 태그 사이의 내용을 보여 주는 children

children : 컴포넌트 태그 사이의 내용을 보여줌

```
# App.js

import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent>children 내용</MyComponent>;
};

export default App;
```

```
# MyComponent.js

const MyComponent = (props) => {
  return (
    <div>
      안녕하세요. 제 이름은 {props.name}
      <br />
      children 값은 {props.children}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;

```

### 3.3.5 비구조화 할당 문법을 통해 props 내부 값 추출하기

- 비구조화 할당 문법을 사용하여 내부 값을 추출 가능

```
# App.js

import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent>children 내용</MyComponent>;
};

export default App;
```

```
# MyComponent.js

const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다. children 값은 {children}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;

```

- 함수의 파라미터가 객체라면 그 값을 바로 비구조화해서 사용 가능

```
# App.js

import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent>children 내용</MyComponent>;
};

export default App;
```

```
# MyComponent.js

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다. children 값은 {children}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;

```

### 3.3.6 propTypes를 통한 props 검증

- import 구문을 사용하여 불러와서 사용

```
import PropTypes from "prop-types";
```

```
MyComponent.prototype = {
  name: PropTypes.string,
};
```

#### 3.3.6.1 isRequired를 사용하여 필수 propTypes 설정

- propTypes를 지정하지 않았을 때 경고 메시지를 띄워 주는 작업 -> propTypes를 지정할 때 뒤에 isRequired를 붙여 주면 됨

```
MyComponent.prototype = {
  name: PropTypes.string.isRequired,
};
```

#### 3.3.6.2 더 많은 PropTypes 종류

- array : 배열
- arrayOf : 특정 PropType으로 이루어진 배열
- bool : true 혹은 false 값
- func : 함수
- number : 숫자
- object : 객체
- string : 문자열
- symbol : ES6의 Symbol
- node : 렌더링할 수 있는 모든 것
- instanceOf(클래스) : 특정 클래스의 인스턴스
- oneOf : 주어진 배열 요소 중 값 하나
- oneOfType : 주어진 배열 안의 종류 중 하나
- objectOf : 객체의 모든 키 값이 인자로 주어진 PropType인 객체
- shape : 주어진 스키마를 가진 객체
- any : 아무 종류

### 3.3.7 클래스형 컴포넌트에서 props 사용하기

- 클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회

```
class MyComponent extends Component {
  render() {
    const { name, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name} 입니다. children 값은 {children}
      </div>
    );
  }
}
```

- 클래스형 컴포넌트에서 defaultProps와 propTypes를 설정할 때 class 내부에서 지정하는 방법도 있음

```
import { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static: defaultProps = {
    name: "기본 이름",
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    const { name, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name} 입니다. children 값은 {children}
      </div>
    );
  }
}

export default MyComponent;
```

## 3.4 state

- state는 컴포넌트 내부에서 바뀔 수 있는 값
- props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며, 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용 가능
- state의 종류 : 클래스형 컴포넌트가 지니고 있는 state, 함수 컴포넌트에서 useState 함수를 통해 사용하는 state

### 3.4.1 클래스형 컴포넌트의 state

- constructor 메서드를 작성하여 설정
  - 반드시 super(props) 호출
  - 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수 호출
  - this.state 값에 초깃값 설정
  - 컴포넌트의 state는 객체 형식

```
constructor(props) {
  super(props);
  # state의 초깃값 설정
  this.state = {
    number: 0,
  };
}
```

- render() 함수
  - 현재 state를 조회할 대는 this.state 조회
  - 이벤트로 설정할 함수를 넣어 줄 때는 화살표 함수 문법을 사용하여 넣어 줘야 함

```
render() {
  const { number } = this.state; // state를 조회할 때는 this.state로 조회
  return (
    <div>
      <h1>{number}</h1>
      <button
        # onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
        onClick={() => {
          // this.steState를 사용하여 state에 새로운 값을 넣을 수 있음
          this.setState({ number: number + 1 });
        }}
      >
        +1
      </button>
    </div>
  );
}
```

- 해당 컴포넌트를 불러와 렌더링

```
# App.js
import Counter from "./Counter";

const App = () => {
  return <Counter />;
};

export default App;
```

#### 3.4.1.1 state 객체 안에 여러 값이 있을 때

- state 객체 안에 여러 값이 존재 가능
- this.setState 함수는 인자로 전달된 객체 안에 들어 있는 값만 바꿔줌

```
# Counter.js
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초깃값 설정
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h1>바뀌지 않는 값 : {fixedNumber}</h1>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            // this.steState를 사용하여 state에 새로운 값을 넣을 수 있음
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
```

#### 3.4.1.2 state를 constructor에서 꺼내기

- constructor 메서드를 선언하지 않고도 state 초깃값 설정 가능

```
state = {
  number: 0,
  fixedNumber: 0,
};
```

#### 3.4.1.3 this.setState에 객체 대신 함수 인자 전달하기

- this.setState를 사용하여 state 값을 업데이트 할 때는 상태가 비동기적으로 업데이트

```
<button
  onClick={() => {
    // this.steState를 사용하여 state에 새로운 값을 넣을 수 있음
    this.setState({ number: number + 1 });
    this.setState({ number: this.state.number + 1 });
  }}
>
  +1
</button>
```

=> this.setState를 두 번 사용하는 것임에도 불구하고 버튼을 클릭할 때는 +1 만 됨 (state 값이 바로 바뀌지 않기 때문)

- this.setState를 사용할 때 객체 대신에 함수를 인자로 넣어주면 됨

```
onClick={() => {
  this.setState((prevState) => {
    return {
      number: prevState.number + 1,
    };
});
```

```
this.setState((prevState) => ({
    number: prevState.number + 1,
  }));
}}
```

동일 기능

#### 3.4.1.4 this.setState가 끝난 후 특정 작업 실행하기

- setState를 사용하여 값을 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 setState의 두 번째 파라미터로 콜백 함수를 등록하여 작업을 처리 가능

```
<button
  onClick={() => {
    this.setState(
      {
        number: number + 1,
      },
      () => {
        console.log("방금 setState가 호출되었습니다.");
        console.log(this.state);
      }
    );
  }}
>
  +1
</button>
```

### 3.4.2 함수 컴포넌트에서 useState 사용하기

- useState라는 함수를 사용하여 함수 컴포넌트에서 state사용 가능
- Hooks를 사용

#### 3.4.2.1 배열 비구조화 할당

- 배열 안에 들어 있는 값을 쉽게 추출할 수 있도록 해주는 문법

```
const array = [1, 2];
const one = array[0];
const two = array[1];
```

```
const array = [1, 2];
const [one, two] = [array];
```

동일

#### 3.4.2.2 useState 사용하기

- useState 함수의 인자에는 상태의 초깃값
- 클래스형 컴포넌트에서의 state 초깃값은 객체 형태로 넣어줘야 하지만, useState에서는 반드시 객체가 아니어도 됨 (값의 형태는 자유)
- 함수를 호출하면 배열이 반환
- 배열의 첫 번째 원소는 현재 상태, 두 번째 원소는 상태를 바꾸어 주는 함수 (세터 함수)

```
# Say.js
import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
```

```
# App.js
import Say from "./Say";

const App = () => {
  return <Say />;
};

export default App;
```

#### 3.4.2.3 한 컴포넌트에서 useState 여러 번 사용하기

- useState는 한 컴포넌트에서 여러 번 사용 가능

```
# Say.js
import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
```

## 3.5 state를 사용할 때 주의 사항

- state 값을 바꾸어야 할 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야 함

# 4장 이벤트 핸들링

## 4.1 리액트의 이벤트 시스템

### 4.1.1 이벤트를 사용할 때 주의 사항

1. 이벤트 이름은 카멜 표기법으로 작성
2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
3. DOM 요소에만 이벤트를 설정 가능

### 4.1.2 이벤트 종류

- clipboard
- Composition
- Keyboard
- Focus
- Form
- Mouse
- Selection
- Touch
- UI
- Wheel
- Media
- Image
- Animation
- Transition

## 4.2 예제로 이벤트 핸들링 익히기

1. 컴포넌트 생성 및 불러오기
2. onChange 이벤트 핸들링하기
3. 임의 메서드 만들기
4. input 여러 개 다루기
5. onKeyPress 이벤트 핸들링하기

### 4.2.1 컴포넌트 생성 및 불러오기

#### 4.2.1.1 컴포넌트 생성

```
# EventPractice.js

import { Component } from "react";

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
      </div>
    );
  }
}

export default EventPractice;
```

#### 4.2.1.2 App.js에서 EventPractice 렌더링

```
import EventPractice from "./EventPractice";

function App() {
  return <EventPractice />;
}

export default App;
```

### 4.2.2 onChange 이벤트 핸들링하기

#### 4.2.2.1 onChange 이벤트 설정

```
<input
  type="text"
  name="message"
  placeholder="아무거나 입력해 보세요"
  onChange={(e) => {
    console.log(e.target.value);
  }}
/>
```

#### 4.2.2.2 state에 input 값 담기

```
# EventPractice.js

import { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
      </div>
    );
  }
}

export default EventPractice;
```

#### 4.2.2.3 버튼을 누를 때 comment 값을 공백으로 설정

```
<button
  onClick={() => {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }}
>
  확인
</button>
```

### 4.2.3 임의 메서드 만들기

- 렌더링을 하는 동시에 함수를 만들어서 전달해 주는 것이 아니라 함수를 미리 준비하여 전달하는 방법도 존재

#### 4.2.3.1 기본 방식

```
# EventPractice.js

import { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
```

#### 4.2.3.2 Property Initializer Syntax를 사용한 메서드 작성

- 위의 방법은새 메서드를 만들 때마다 constructor도 수정하기 때문에 불편함
- 바벨의 transform-class-properties 문법을 사용하여 화살표 함수 형태로 메서드를 정의할 수 있음

```
# EventPractice.js

import { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
```

### 4.2.4 input 여러 개 다루기

```
# EventPractice.js

import { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
```

### 4.2.5 onKeyPress 이벤트 핸들링

```
# EventPractice.js

import { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
```

## 4.3 함수 컴포넌트로 구현해 보기

```
# EventPractice.js

import { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);

  const onClick = () => {
    alert(username + ":" + message);
    setUsername("");
    setMessage("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
```

input의 개수가 많아질 것 같으면 e.target.name을 활용하는 것이 더 좋음

```
# EventPractice.js

import { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ":" + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
```

# 5장 ref: DOM에 이름 달기

- ref : 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법

## 5.1 ref는 어떤 상황에서 사용해야 할까?

- ref는 DOM을 꼭 직접적으로 건드려야 할 때 사용

### 5.1.1 예제 컴포넌트 생성

```
# ValidationSample.css

.success {
  background-color: lightgreen;
}

.failure {
  background-color: lightcoral;
}
```

```
# ValidationSample.js

import { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
```

### 5.1.2 App 컴포넌트에서 예제 컴포넌트 렌더링

```
import ValidationSample from "./ValidationSample";

function App() {
  return (
    <div>
      <ValidationSample />
    </div>
  );
}

export default App;
```

### 5.1.3 DOM을 꼭 사용해야 하는 상황

- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기

## 5.2 ref 사용

### 5.2.1 콜백 함수를 통한 ref 설정

- ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달
- 콜백 함수는 ref 값을 파라미터로 전달
- 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정

```
<input ref={(ref) => {this.input=ref}} />
```

### 5.2.2 createRef를 통한 ref 설정

- 리액트에 내장되어 있는 createRef라는 함수를 사용
- 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아주고 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어 주면 ref 설정 완료
- 설정한 뒤 나중에 ref를 설정해 준 DOM에 접근하려면 this.input.current를 조회

```
# RefSample.js

import React, { Component } from "react";

class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default RefSample;
```

#### 5.2.3.1 input에 ref 달기

```
<input
  ref={(ref) => (this.input = ref)}
  type="password"
  value={this.state.password}
  onChange={this.handleChange}
  className={
    this.state.clicked
      ? this.state.validated
        ? "success"
        : "failure"
      : ""
  }
/>
```

#### 5.2.3.2 버튼 onClick 이벤트 코드 수정

```
handleButtonClick = () => {
  this.setState({
    clicked: true,
    validated: this.state.password === "0000",
  });
  this.input.focus();
};
```

## 5.3 컴포넌트에 ref 달기

- 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 쓰임

### 5.3.1 사용법

```
<MyComponent
    ref={(ref) => {this.MyComponent=ref}} />
```

=> MyComponent 내부의 메서드 및 멤버 변수에도 접근 가능

### 5.3.2 컴포넌트 초기 설정

#### 5.3.2.1 컴포넌트 파일 생성

```
# ScrollBox.js

import { Component } from "react";

class ScrollBox extends Component {
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
```

#### 5.3.2.2 App 컴포넌트에서 스크롤 박스 컴포넌트 렌더링

```
# App.js

import { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox />
      </div>
    );
  }
}

export default App;
```

### 5.3.3 컴포넌트에 메서드 생성

- scrollTop : 세로 스크롤바 위치 (0~350)
- scrollHeight : 스크롤이 있는 박스 안의 div 높이 (650)
- clientHeight : 스크롤이 있는 박스의 높이 (300)

```
scollToBottom = () => {
  const { scrollHeight, clientHeight } = this.box;
  this.box.scollTop = scrollHeight - clientHeight;
};
```

### 5.3.4 컴포넌트에 ref 달고 내부 메서드 사용

```
# App.js

import { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
```

# 6장 컴포넌트 반복

## 6.1 자바스크립트 배열의 map() 함수

- 자바스크립트 배열 객채의 내장 함수인 map 함수를 사용하여 반복되는 컴포넌트를 렌더링할 수 있음
- map 함수는 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 그 결과로 새로운 배열 생성

### 6.1.1 문법

```
arr.map(callback, [thisArg])
```

- callback : 새로운 배열의 요소로 생성하는 함수, 파라미터 세 가지
  - currentValue : 현재 처리하고 있는 요소
  - index : 현재 처리하고 있는 요소의 index 값
  - array : 현재 처리하고 있는 원본 배열
- thisArg(선택 항목) : callback 함수 내부에서 사용할 this 레퍼런스

### 6.1.2 예제

- map 함수를 사용하여 새로운 배열 생성 가능

```
var numbers = [1, 2, 3, 4, 5];

var processed = numbers.map(function(num) {
  return num * num;
});

console.log(processed)
```

```
[1, 4, 9, 16, 25]
```

## 6.2 데이터 배열을 컴포넌트 배열로 변환하기

### 6.2.1 컴포넌트 수정하기

```
# IterationSample.js

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name) => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
```

### 6.2.2 App 컴포넌트에서 예제 컴포넌트 렌더링

```
# App.js

import { Component } from "react";
import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return (
      <div>
        <IterationSample />
      </div>
    );
  }
}

export default App;
```

## 6.3 key

### 6.3.1 key 설정

- key 값을 설정할 때는 map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정
- key 값은 유일해야 함
- 데이터가 가진 고윳값을 key 값으로 설정해야 함

```
# IterationSample.js

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
```

## 6.4 응용

### 6.4.1 초기 상태 설정하기

- useState를 사용하여 상태 설정
  - 데이터 배열
  - 텍스트를 입력할 수 있는 input의 상태
  - 데이터 배열에서 새로운 항목을 추가할 때 사용할 고유 id를 위한 상태

```
# IterationSample.js

import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
```

### 6.4.2 데이터 추가 기능 구현하기

```
import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해 줌
    setNames(nextNames); // names 값을 업데이터
    setInputText(""); // inputText를 비움
  };

  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
```

### 6.4.3 데이터 제거 기능 구현하기

- filter 함수를 사용하면 배열에서 특정 조건을 만족하는 원소들만 쉽게 분류 가능

```
# IterationSample.js

import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해 줌
    setNames(nextNames); // names 값을 업데이터
    setInputText(""); // inputText를 비움
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
```
