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

# 7장 컴포넌트의 라이프사이클 메서드

## 7.1 라이프사이클 메서드의 이해

- 라이프사이클 메서드 종류는 총 9가지
  - Will 접두사가 붙은 메서드는 어떤 작업을 작동하기 전에 실행되는 메서드
  - Did 접두사가 붙은 메서드는 어떤 작업을 작동한 후에 실행되느 메서드
- 컴포넌트 클래스에서 덮어 써 선언함으로써 사용 가능 : 마운트, 업데이트, 언마운트
- 마운트 : DOM이 생성되고 웹 브라우저상에 나타나는 것
  - constructor : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
  - getDericedStateFormProps : props에 있는 값을 state에 넣을 때 사용하는 메서드
  - render : 우리가 준비한 UI를 렌더링하는 메서드
  - componentDidMount : 컴포넌트가 웹 브라우저상에 나타난 후 호출되는 메서드
- 업데이트
  - 업데이트가 되는 경우
    - props가 바뀔 때
    - state가 바뀔 때
    - 부모 컴포넌트가 리렌더링될 때
    - this.forceUpdate로 강제로 렌더링을 트리거할 때
  - 메서드
    - getDerivedStateFromProps : 마운트 과정에서도 호출되며, 업데이트가 시작하기 전에도 호출됨, props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용
    - shouldComponentUpdate : 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드, true(다음 메서드 프사이클 메서드를 계속 실행) 혹은 false(변환하면 작업 중지) 반환, 특정 함수에서 this.forceUpdate() 함수를 호출한다면 이 과정을 생략하고 바로 render 함수를 호출
    - render : 컴포넌트를 리렌더링
    - getSnapshotBeforeUpdate : 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
    - componentDidUpdate : 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드
- 언마운트 : 컴포넌트를 DOM에서 제거하는 것
  - componentWillUnmount : 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드

## 7.2 라이프사이클 메서드 살펴보기

### 7.2.1 render() 함수

- 라이프사이클 메서드 중 유일한 필수 메서드
- 이 메서드 안에서 this.props와 this.state에 접근 가능, 리액트 요소 반환
- 아무것도 보여 주고 싶지 않다면 null 값이나 false 값을 반환

### 7.2.2 constructr 메서드

- 컴포넌트의 생성자 메서드
- 컴포넌트를 만들 때 처음으로 실행됨
- 초기 state를 정할 수 있음

### 7.2.3 getDerivedFromProps 메서드

- props로 받아 온 값을 state에 동기화시키는 용도
- 컴포넌트가 마운트될 때와 업데이트될 때 호출됨

### 7.2.4 componentDidMount 메서드

- 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행됨

### 7.2.5 shouldComponentUpdate 메서드

- props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드
- ture 값 또는 false 값을 반환해야 함
- 컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면 기본적으로 언제나 true 값 반환
- 이 메서드가 flase 값을 반환한다면 업데이트 과정 중지

### 7.2.6 getSnapshotBeforeUpdate 메서드

- render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출됨
- 반환하는 값은 componentDidMount에서 세 번째 파라미터인 snapshot 값으로 전달
- 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용

### 7.2.7 componentDidUpdate 메서드

- 리렌더링을 완료한 후 실행
- 업데이트가 끝난 직후이므로, DOM 관련 처리를 해도 무방
- prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근 가능
- getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을 전달 받기 가능

### 7.2.8 componentWillUnmount 메서드

- 컴포넌트를 DOM에서 제거할 때 실행

### 7.2.9 componentDidCatch 메서드

- 컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류 UI를 보여 줄 수 있게 해줌

## 7.3 라이프사이클 메서드 사용하기

### 7.3.1 예제 컴포넌트 생성

```
# LifeCycleSample.js

import { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기 직전 색상 ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
```

### 7.3.2 App 컴포넌트에 예제 컴포넌트 사용

```
# App.js

import { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 선택</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
```

### 7.3.3 에러 잡아내기

```
# App.js

import { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 선택</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
```

```
# LifeCycleSample.js

import { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기 직전 색상 ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
```

```
# ErrorBoundary.js

import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }

  render() {
    if (this.state.error) return <div>에러가 발생하였습니다!</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
```

# 8장 Hooks

## 8.1 useState

```
# Counter.js

import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button oonClick={() => setValue(value + 1)}>+1</button>
      <button oonClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
```

```
# App.js

import Counter from "./Counter";

const App = () => {
  return <Counter />;
};

export default App;
```

- useState는 코드 상단에서 import 구문을 통해 불러옴
- useState 함수의 파라미터에는 상태의 기본값
- useState 이 함수가 호출되면 배열 반환
  - 배열의 첫 번째 원소는 상태 값,
  - 두 번째 원소는 상태를 설정하는 함수

### 8.1.1 useState를 여러 번 사용하기

```
# Info.js

import { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```

```
# App.js

import Info from "./Info";

const App = () => {
  return <Info />;
};

export default App;
```

## 8.2 useEffect

- useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hooks
- 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태

```
useEffect(() => {
  console.log("렌더링이 완료되었습니다!");
  console.log((name, nickname));
});
```

### 8.2.1 마운트될 때만 실행하고 싶을 때

- useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 비어 있는 배열을 넣어주면 됨

```
useEffect(() => {
  console.log("마운트될 때만 실행됩니다.");
});
```

### 8.2.2 특정 값이 업데이트될 때만 실행하고 싶을 때

```
componentDidUpdate(prevProps, prevState) {
  if (prevProps.value !== this.props.value) {
    doSomthing();
  }
}
```

=> props 안에 들어 있는 value 값이 바뀔 때만 특정 작업 수행

- useEffect의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어 주면 됨

```
useEffect(() => {
  console.log(name);
}, [name]);
```

### 8.2.3 뒷정리하기

```
useEffect(() => {
  console.log("effect");
  console.log(name);
  return () => {
    console.log("cleanup");
    console.log(name);
  };
}, [name]);
```

- useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며, 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라짐
- 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리 함수를 반환해 주어야 함

```
# App.js

import { useState } from "react";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;
```

- 렌더링될 때마다 뒷정리 함수가 계속 나타나는 것 확인 가능
- 뒷정리 함수가 호출될 때는 업데이트되기 직전의 값을 보여 줌
- 오직 언마운트될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 함수의 두 번재 파리미터에 비어있는 배열을 넣어주면 됨

```
useEffect(() => {
  console.log("effect");
  return () => {
    console.log("unmount");
  };
}, []);
```

## 8.3 useReducer

- useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 Hooks
- 리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수
- 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜 주어야 함

```
function reducer(state, action) {
  return { ... };
}
```

### 8.3.1 카운터 구현하기

```
# Counter. js

import { useReducer } from "react";

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button oonClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button oonClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
```

- useReducer의 첫 번째 파라미터에는 리듀서 함수, 두 번째 파라미터에는 해당 리듀서의 기본값
- Hooks을 사용하면 state 값과 dispatch 함수
  - state는 현재 가리키고 있는 상태
  - dispatch는 액션을 발생시키는 함수, dispatch(action)과 같은 형태로 함수 안에 파라미터로 액션 값을 넣어 주면 리듀서 함수가 호출되는 구조
- useReducer를 사용했을 때의 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있는 것

### 8.3.2 인풋 상태 관리하기

- useReducer를 사용하면 기존에 클래스형 컴포넌트에서 input 태그에 name 값을 할당하고 e.target.name을 참조하여 setState를 해 준 것과 유사한 방식으로 작업 처리 가능

```
# Info.js

import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```

```
# App.js

import Info from "./Info";

const App = () => {
  return <Info />;
};

export default App;
```

- useReducer에서의 액션은 어떤 값도 사용 가능

## 8.4 useMemo

- useMemo를 사용하면 함수 컴포넌트 내부에서 발생하는 연산을 최적화
- 리스트에 숫자를 추가하면 추가된 숫자들의 평균을 보여 주는 함수 컴포넌트를 작성 가능

```
# Average.js

import { useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;
```

```
# App.js

import Average from "./Average";

const App = () => {
  return <Average />;
};

export default App;
```

- 숫자를 등록할 때뿐만 아니라 인풋 내용이 수정될 때도 우리가 만든 getAverage 함수가 호출되는 것을 확인 가능
- 인풋 내용이 바뀔 때는 평균값을 다시 계산할 필요가 없는데, 이렇게 렌더링할 때마다 계산하는 것은 낭비
- useMemo Hook을 사용하면 최적화 가능
- 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식

```
# Average.js

import { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};

export default Average;
```

## 8.5 useCallback

- 렌더링 성능을 최적화해야 하는 상황에서 사용
- 만들어 놨던 함수를 재사용 가능
- useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고, 두 번째 파라미터에는 배열을 넣음
- 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시

```
const onChange = useCallback((e) => {
  setNumber(e.target.value);
}, []);

const onInsert = useCallback(() => {
  const nextList = list.concat(parseInt(number));
  setList(nextList);
  setNumber("");
}, [number, list]);
```

=> onChange처럼 비어 있는 배열을 넣게 되면 컴포넌트가 렌더링될 때 만들었던 함수를 계쏙해서 재사용하게 되며 onInsert처럼 배열 안에 number와 list를 넣게 되면 인풋 내용이 바뀌거나 새로운 항목이 추가될 때 새로 만들어진 함수를 사용하게 됨

- 함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두 번째 파라미터 안에 포함시켜 주어야 함

## 8.6 useRef

- useRef Hook은 함수 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해줌

```
# Average.js

import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};

export default Average;
```

- useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킴

### 8.6.1 로컬 변수 사용하기

- 컴포넌트 로컬 변수를 사용해야 할 때도 useRef를 활용 가능
- 여기서 로컬 변수란 렌더링과 상관없이 바뀔 수 있는 값
- 클래스 형태로 작성된 컴포넌트의 경우에는 로컬 변수를 사용해야 할 때 다음과 같이 작성

```
# MyComponent.js

import { Component } from "react";

class MyComponent extends Component {
  id = 1;
  setId = (n) => {
    this.id = n;
  };
  printId = () => {
    console.log(this.id);
  };
  render() {
    return <div>MyComponent</div>;
  }
}

export default MyComponent;
```

```
# RefSample.js

import { useRef } from "react";

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(this.id);
  };
  return <div>refsample</div>;
};

export default RefSample;
```

## 8.7 커스텀 Hooks 만들기

- 여러 컴포넌트에서 비슷한 기능을 공유할 경우, Hook으로 작성하여 로직을 재사용 가능
- 기존에 Info 컴포넌트에서 여러 개의 인풋을 관리하기 위해 useReducer로 작성했던 로직을 useInputs라는 Hook으로 따로 분리

```
# useInputs.js

import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
```

```
# Info.js

import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```

## 8.8 다른 Hooks

- 커스텀 Hooks를 만들어서 사용했던 것처럼, 다른 개발자가 만든 Hooks도 라이브러리로 설치하여 사용 가능

# 9장 컴포넌트 스탕일링

## 9.1 가장 흔한 방식, 일반 CSS

- CSS 클래스를 중복되지 않게 만들어야 함
- CSS 클래스가 중복되는 것을 방지하는 여러 가지 방식 존재
  - 이름을 지을 때 특별한 규칙을 사용하여 짓는 것
  - CSS Selector 활용

### 9.1.1 이름 짓는 규칙

- 클래스 이름이 컴포넌트 이름-클래스 형태로 지어져 있음
- 클래스 이름에 컴포넌트 이름을 포함시킴으로써 다른 컴포넌트에서 실수로 중복되는 클래스를 만들어 사용하는 것을 방지 가능
- BEM 네이밍 방식 존재 : 이름을 지을 때 일종의 규칙을 준수하여 해당 클래스가 어디에서 어떤 용도로 사용되는지 명확하게 작성하는 방식

### 9.1.2 CSS Selector

- CSS 클래스가 특정 클래스 내부에 있는 경우에만 스타일을 적용 가능

```
.App .logo {
  animation : App-logo-spin infinite 20s linear;
  height : 40vmin;
}
```

```
# App.css

.App {
  text-align: center;
}

/* App 안에 들어 있는 .logo */
.App .logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

/* App안에 들어 있는 header
header 클래스가 아닌 header 태그 자체에 스타일을 적용하기 때문에 . 생략 */
.App header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

/* App 안에 들어 있는 a 태그 */
.App a {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

```
# App.js

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

## 9.2 Sass 사용하기

- Sass는 CSS 전처리기로 복잡한 작업을 쉽게 할 수 있도록 해 주고, 스타일 코드의 재활용성을 높여 줄 뿐만 아니라 코드의 가독성을 높여서 유지 보수를 더욱 쉽게 해줌
- Sass에서는 두 가지 확장자 지원
  - .scss 지원
  - .sass 지원

```
# .sass

$font-stack : Helvetica, sans-serif
$primary-color : #333

body
    font : 100% $font-stack
    color : $primary-color
```

```
# .scss

$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

- sass라는 라이브러리를 설치해 주어야 함

```
npm add sass
```

```
# SassComponent.scss

/* 변수 사용하기 */
$red: #fa5252;
$orange: #fd7e14;
$yellow: #fcc419;
$green: #40c057;
$blue: #339af0;
$indigo: #5c7cfa;
$violet: #7950f2;

/* 믹스인 만들기 (재사용되는 스타일 블록을 함수처럼 사용 할 수 있음) */
@mixin square($size) {
  $calculated: 32px * $size;
  width: $calculated;
  height: $calculated;
}

.SassComponent {
  display: flex;
  .box {
    /* 일반 CSS 에선 .SassComponent .box 와 마찬가지 */
    background: red;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &.red {
      /* .red 클래스가 .box 와 함께 사용 됐을 때 */
      background: $red;
      @include square(1);
    }
    &.orange {
      background: $orange;
      @include square(2);
    }
    &.yellow {
      background: $yellow;
      @include square(3);
    }
    &.green {
      background: $green;
      @include square(4);
    }
    &.blue {
      background: $blue;
      @include square(5);
    }
    &.indigo {
      background: $indigo;
      @include square(6);
    }
    &.violet {
      background: $violet;
      @include square(7);
    }
    &:hover {
      /* .box 에 마우스 올렸을 때 */
      background: black;
    }
  }
}
```

```
# SassComponent.js

import React from "react";
import "./SassComponent.scss";

const SassComponent = () => {
  return (
    <div className="SassComponent">
      <div className="box red" />
      <div className="box orange" />
      <div className="box yellow" />
      <div className="box green" />
      <div className="box blue" />
      <div className="box indigo" />
      <div className="box violet" />
    </div>
  );
};

export default SassComponent;
```

```
# App.js

import { Component } from "react";
import SassComponent from "./SassComponent";

class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
      </div>
    );
  }
}

export default App;
```

### 9.2.1 utils 함수 분리하기

- 여러 파일에서 사용될 수 있는 Sass 변수 및 믹스인은 다른 파일로 따로 분리하여 작성한 뒤 필요한 곳에서 쉽게 불러와 사용 가능

```
# src\styles\utils.scss

// 변수 사용하기
$red: #fa5252;
$orange: #fd7e14;
$yellow: #fcc419;
$green: #40c057;
$blue: #339af0;
$indigo: #5c7cfa;
$violet: #7950f2;

// 믹스인 만들기 (재사용되는 스타일 블록을 함수처럼 사용 할 수 있음)
@mixin square($size) {
  $calculated: 32px * $size;
  width: $calculated;
  height: $calculated;
}
```

- SassComponent.js에서는 utils.scss 파일에서 선언한 변수와 믹스인을 제거하고, 다른 scss 파일을 불러올 때는 @import 구문 사용

```
# SassComponent.js

@import "./styles/utils.scss";

.SassComponent {
  display: flex;
  .box {
    /* 일반 CSS 에선 .SassComponent .box 와 마찬가지 */
    background: red;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &.red {
      /* .red 클래스가 .box 와 함께 사용 됐을 때 */
      background: $red;
      @include square(1);
    }
    &.orange {
      background: $orange;
      @include square(2);
    }
    &.yellow {
      background: $yellow;
      @include square(3);
    }
    &.green {
      background: $green;
      @include square(4);
    }
    &.blue {
      background: $blue;
      @include square(5);
    }
    &.indigo {
      background: $indigo;
      @include square(6);
    }
    &.violet {
      background: $violet;
      @include square(7);
    }
    &:hover {
      /* .box 에 마우스 올렸을 때 */
      background: black;
    }
  }
}
```

### 9.2.2 sass-loader 설정 커스터마이징하기

- create-react-app으로 만든 프로젝트는 프로젝트 구조의 복잡도를 낮추기 위해 세부 설정이 숨겨져 있음
- 이를 커스터마이징하려면 프로젝트 디렉터리에서 npm eject 명령어를 통해 세부 설정을 밖으로 꺼내 주어야 함

```
# config\webpack.config.js - sassRegex 부분

{
  test: sassRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders({
    importLoaders: 3,
    sourceMap: isEnvProduction
      ? shouldUseSourceMap
      : isEnvDevelopment,
  }).concat({
    loader: require.resolve("sass-loader"),
    options: {
      sassOptions: {
        includePaths: [paths.appSrc + "/styles"],
      },
    },
  }),
  sideEffects: true,
},
```

- utilis.scss 파일을 불러올 때 현재 수정하고 있는 scss 파일 경로가 어디에 위치하더라도 앞부분에 상대 경로를 입력할 필요 없이 styles 디렉터리 기준 절대 경로를 사용하여 불러오기 가능

```
@import "utils.scss";
```

- 새 파일을 생성할 때마다 utils.scss를 매번 이렇게 포함시키지 않아도 됨
- sass-loader의 additionalData 옵션을 설정하면 됨

```
# config\webpack.config.js - sassRegex 부분

{
  test: sassRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders({
    importLoaders: 3,
    sourceMap: isEnvProduction
      ? shouldUseSourceMap
      : isEnvDevelopment,
  }).concat({
    loader: require.resolve("sass-loader"),
    options: {
      sassOptions: {
        includePaths: [paths.appSrc + "/styles"],
      },
      additionalData: "@import 'utils';",
    },
  }),
  sideEffects: true,
},
```

=> scss 파일에서 utils.scss를 자동으로 불러오므로, Sass에서 맨 윗줄에 있는 import 구문을 지워도 정상적으로 작동 됨

### 9.2.3 node_modules에서 라이브러리 불러오기

- 상대 경로를 사용하여 node_modules까지 들어오는 방법

```
@import '../../../node_moudles/library/styles';
```

- 물결 문자(~)를 사용하여 자동으로 라이브러리 디렉터리를 탐지하여 스타일을 불러오기 가능

```
@import '~library/styles';
```

- Sass 라이브러리를 불러올 때는 node_modules 내부 라이브러리 경로 안에 들어 있는 scss 파일을 불러와야 함

```
# utils.scss

@import "~include-media/dist/include-media";
@import "~open-color/open-color";
```

```
# SassComponent.scss (기존 코드에 추가)

background: $oc-gray-2;
@include media("<768px") {
  background: $oc-gray-9;
}
```

=> 가로 크기가 768px 미만이 되면 배경색을 어둡게 바꿔 줌

## 9.3 CSS Module

- CSS Module은 CSS를 불러와서 사용할 때 클래스 이름을 고유한 값, 즉 '[파일 이름]_ [클래스 이름] _[해시값]' 형태로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지해 주는 기술

```
# CSSModule.module.css

/* 자동으로 고유해질 것이므로 흔히 사용되는 단어를 클래스 이름으로 마음대로 사용가능*/

.wrapper {
  background: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
}

/* 글로벌 CSS 를 작성하고 싶다면 */
:global .something {
  font-weight: 800;
  color: aqua;
}
```

```
# CSSModule.js

import styles from "./CSSModule.module.css";

const CSSModule = () => {
  return (
    <div className={styles.wrapper}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
```

- CSS Module이 적용된 스타일 파일을 불러오면 객체를 하나 전달받게 되는데 CSS Module에서 사용한 클래스 이름과 해당 이름을 고유화한 값이 키-값 형태로 들어 있음
- 고유한 클래스 이름을 사용하려면 클래스를 적용하고 싶은 JSX 엘리먼트에 className={styles.[클래스 이름]} 형태로 전달해주면 됨
- :global을 사용하여 전역적으로 선언한 클래스의 경우 평상시 해 왔던 것처럼 그냥 문자열로 넣어주면 됨
- CSS Module을 사용한 클래스 이름을 두 개 이상 적용할 때

```
# CSSModule.module.css

/* 자동으로 고유해질 것이므로 흔히 사용되는 단어를 클래스 이름으로 마음대로 사용가능*/

.wrapper {
  background: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
}

.inverted {
  color: black;
  background: white;
  border: 1px solid black;
}

/* 글로벌 CSS 를 작성하고 싶다면 */
:global .something {
  font-weight: 800;
  color: aqua;
}
```

```
# CSSModule.js

import styles from "./CSSModule.module.css";

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
```

### 9.3.1 classnames

- classnames는 CSS 클래스를 조건부로 설정할 때 유용한 라이브러리
- CSS Module을 사용할 때 이 라이브러리를 사용하면 여러 클래스를 적용할 때 매우 편리

```
npm add classnames
```

```
# CSSModule.js

import React from "react";
import classNames from "classnames/bind";
import styles from "./CSSModule.module.css";

const cx = classNames.bind(styles); // 미리 styles 에서 클래스를 받아오도록 설정하고

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
```

### 9.3.2 Sass와 함께 사용하기

- Sass를 사용할 때도 파일 이름 뒤에 .module.scss 확장자를 사용해주면 CSS Module로 사용 가능

```
# CSSModule.module.scss

/* 자동으로 고유해질 것이므로 흔히 사용되는 단어를 클래스 이름으로 마음대로 사용가능*/

.wrapper {
  background: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
  &.inverted {
    // inverted 가 .wrapper 와 함께 사용 됐을 때만 적용
    color: black;
    background: white;
    border: 1px solid black;
  }
}

/* 글로벌 CSS 를 작성하고 싶다면 */
:global {
  // :global {} 로 감싸기
  .something {
    font-weight: 800;
    color: aqua;
  }
  // 여기에 다른 클래스를 만들 수도 있겠죠?
}
```

```
import styles from "./CSSModule.module.scss";
```

### 9.3.3 CSS Module이 아닌 파일에서 CSS Module 사용하기

- CSS Module에서 글로벌 클래스를 정의할 때 : global을 사용했던 것처럼 CSS Module이 아닌 일반 .css/,.scss 파일에서도 :local을 사용하여 CSS Module을 사용 가능

## 9.4 styled-components

- 설치

```
npm add styled-components
```

```
# StyledComponent.js

import styled, { css } from "styled-components";

const Box = styled.div`
  /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* & 문자를 사용하여 Sass 처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* 다음 코드는 inverted 값이 true 일 때 특정 스타일을 부여해줍니다. */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponent;
```

```
# App.js

import { Component } from "react";
import StyledComponent from "./StyledComponent";

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent />
      </div>
    );
  }
}

export default App;
```

### 9.4.1 Tagged 템플릿 리터럴

- 스타일을 작성할 때 `을 사용하여 만든 문자열에 스타일 정보를 넣어주는 문법 : Tagged 템플릿 리터럴
- CSS Module을 배울 때 나온 일반 템플릿 리터럴과 다른 점은 템플릿 안에 자바스크립트 객체나 함수를 전달할 때 온전히 추출 가능

### 9.4.2 스타일링된 엘리먼트 만들기

- styled-components를 사용하여 스타일링된 엘리먼트를 만들 때는 컴포넌트 파일의 상단에서 styled를 불러오고, styled.태그명을 사용하여 구현

```
import styled from 'styled-components';

const MyComponent = styled.duv`
  font-size: 2rem;
`;
```

### 9.4.3 스타일에서 props 조회하기

```
const Box = styled.div`
  /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;
```

=> background 값에 props를 조회해서 props.color의 값을 사용
=> color 값이 주어지지 않았을 때는 blue를 기본 색상으로 설정

### 9.4.4 props에 따른 조건부 스타일링

- 일반 CSS 클래스를 사용하여 조건부 스타일링을 해야 할 때는 className을 사용하여 조건부 스타일링 가능
- styled-components에서는 조건부 스타일링을 간단하게 props로도 처리 가능

### 9.4.5 반응형 디자인

```
# StyledComponent.js

import React from "react";
import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
};

// 위에있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어줍니다.
// 참고: https://www.styled-components.com/docs/advanced#media-templates
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

const Box = styled.div`
  /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`};
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  /* & 문자를 사용하여 Sass 처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  /* 다음 코드는 inverted 값이 true 일 때 특정 스타일을 부여해줍니다. */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponent;
```

=> styled-components 매뉴얼에서 제공하는 유틸 함수 이용

# 10장 일정 관리 웹 어플리케이션 만들기

## 10.1 프로젝트 준비하기

### 10.1.1 프로젝트 생성 및 필요한 라이브러리 설치

```
npm add sass classnames react-icons
```

=> 다양한 라이브러리 설치

### 10.1.2 Pretier 설정

```
# .prettierrc

{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```

### 10.1.3 index.css 수정

```
body {
  margin: 0;
  padding: 0;
  background: #e9ecef;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
```

### 10.1.4 App 컴포넌트 초기화

```
const App = () => {
  return <div>Todo App을 만들자!</div>;
};

export default App;
```

## 10.2 UI 구성하기

1. TodoTemplate : 화면을 가운데에 정렬시켜 주며, 앱 타이틀(일정 관리)를 보여 줌, children으로 내부 JSX를 props로 받아 와서 렌더링
2. TodoInsert : 새로운 항목을 입력하고 추가할 수 있는 컴포넌트, state를 통해 인풋의 상태 관리
3. TodoListItem : 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트, todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여 줌
4. TodoList : todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 이용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여 줌

### 10.2.1 TodoTemplate 만들기

```
# TodoTemplate.js

import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
```

```
# App.js

import TodoTemplate from './components/TodoTemplate';

const App = () => {
  return <TodoTemplate>Todo App을 만들자!</TodoTemplate>;
};

export default App;
```

```
# jsconfig.json

{
  "compilerOptions": {
    "target": "es2020"
  }
}
```

=> TodoTemplate.js 파일이 열린 상태에서 jsconfig.json 파일 자체를 만들고 ctrl + space 누르면 자동 완성됨

```
# TodoTemplate.scss

.TodoTemplate {
  width: 512px;
  // width가 주어진 상태에서 좌우 중앙 정렬
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  .app-title {
    background: #22b8cf;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    background: white;
  }
}
```

### 10.2.2 TodoInsert 만들기

```
# TodoInsert.js

import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
```

```
# TodoInsert.scss

.TodoInsert {
  display: flex;
  background: #495057;
  input {
    // 기본 스타일 초기화
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    &::placeholder {
      color: #dee2e6;
    }
    // 버튼을 제외한 영역을 모두 차지하기
    flex: 1;
  }
  button {
    // 기본 스타일 초기화
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
}
```

```
# App.js

import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  );
};

export default App;
```

### 10.2.3 TodoListItem과 TodoList 만들기

```
# TodoListItem.js

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
```

```
# TodoList.js

import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
```

```
# App.js

import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
};

export default App;
```

```
# TodoList.scss

.TodoList {
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
}
```

```
# TodoListItem.scss

.TodoListItem {
  padding: 1rem;
  display: flex;
  align-items: center; // 세로 중앙 정렬
  &:nth-child(even) {
    background: #f8f9fa;
  }
  .checkbox {
    cursor: pointer;
    flex: 1; // 차지할 수 있는 영역 모두 차지
    display: flex;
    align-items: center; // 세로 중앙 정렬
    svg {
      // 아이콘
      font-size: 1.5rem;
    }
    .text {
      margin-left: 0.5rem;
      flex: 1; // 차지할 수 있는 영역 모두 차지
    }
    // 체크되었을 때 보여 줄 스타일
    &.checked {
      svg {
        color: #22b8cf;
      }
      .text {
        color: #adb5bd;
        text-decoration: line-through;
      }
    }
    .remove {
      display: flex;
      align-items: center;
      font-size: 1, 5rem;
      color: #ff6b6b;
      cursor: pointer;
      &:hover {
        color: #ff8787;
      }

      // 엘리먼트 사이사이에 테두리를 넣어 줌
      & + & {
        border-top: 1px solid #dee2e6;
      }
    }
  }
}
```

## 10.3 기능 구현하기

### 10.3.1 App에서 todos 상태 사용하기

- 나중에 추가할 일정 항목에 대한 상태들은 모두 APP 컴포넌트에서 관리
- APP에서 useState를 사용하여 todos라는 상태 정의, todos를 TodoList의 props로 전달

```
# App.js

import { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
```

- todos 배열 안에 들어 있는 객체에는 각 항목의 고유 id, 내용, 완료 여부를 알려 주는 값이 포함
- 이 배열은 TodoList에 props로 전달됨
- TodoList에서 이 값을 받아 온 후 TodoItem으로 변환하여 렌더링하도록 설정

```
# TodoList.js

import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
```

- props로 받아 온 todos 배열을 배열 내장 함수 map을 통해 TodoListItem으로 이루어진 배열로 변환하여 렌더링
- map을 사용하여 컴포넌트로 변환할 때는 key props로 전달
- key 값은 각 항목마다 가지고 있는 고윳값인 id
- todo 데이터는 통째로 props로 전달
- 여러 종류의 값을 전달해야 하는 경우에는 객체로 통째로 전달하는 편이 성능 최적화 할 때 편리

```
# TodoListItem.js

import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
```

### 10.3.2 항목 추가 기능 구현하기

- TodoInsert 컴포넌트에서 인풋 상태를 관리하고 App 컴포넌트에는 todos 배열에 새로운 객체를 추가하는 함수를 만들어야 함

#### 10.3.2.1 TodoInsert value 상태 관리하기

- TodoInsert 컴포넌트에서 인풋에 입력하는 값을 관리할 수 있도록 useState를 사용하여 value라는 상태 정의
- 인풋에 넣어 줄 onChange 함수 작성
- 컴포넌트가 리렌더링될 때마다 함수를 새로 만드는 것이 아니라, 한 번 함수를 만들고 재사용할 수 있도록 useCallback Hook 사용

```
# TodoInsert.js

import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  });
  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
```

#### 10.3.2.2 리액트 개발자 도구

- 크롬 웹 스토어에서 React Developer Tools 설치

#### 10.3.2.3 todos 배열에 새 객체 추가하기

- App 컴포넌트에서 todos 배열에 새 객체를 추가하는 onInset 함수 만들기
- 새로운 객체를 만들 때마다 id 값에 1씩 더하기
- id 값은 useRef를 사용하여 관리 : id 값은 렌더링되는 정보가 아니기 때문

```
# App.js

import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
```

#### 10.3.2.4 TodoInsert에서 onSubmit 이벤트 설정하기

- App에서 TodoInsert에 넣어 준 onInsert 함수에 현재 useState를 통해 관리하고 있는 value 값을 파라미터로 넣어서 호출

```
# TodoInsert.js

import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  });

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
```

- onSubmit이라는 함수를 만들고, 이를 form의 onSubmit으로 설정
- 함수가 호출되면 props로 받아 온 onInsert 함수에 현재 value 값을 파라미터로 넣어서 호출하고, 현재 value 값을 초기화
- onSubmit 이벤트는 브라우저를 새로고침
- e.preventDefault() 함수를 호출하면 새로고침 방지
- onSubmit 대신에 onClick 이벤트로도 가능하지만 enter를 눌렀을 때도 발생하기 때문

### 10.3.3 지우기 기능 구현하기

- 리액트 컴포넌트에서 배열의 불변성을 지키면서 배열 원소를 제거해야 할 경우, 배열 내장 함수인 filter를 사용하면 매우 간편

#### 10.3.3.1 배열 내장 함수 filter

- filter 함수는 기존의 배열은 그대로 둔 상태에서 특정 조건을 만족하는 원소들만 따로 추출하여 새로운 배열 생성
- filter 함수에는 조건을 확인해주는 함수를 파라미터로 넣어줘야 함
- 파라미터로 넣는 함수는 true 혹은 false 값을 반환
- 여기서 true를 반환하는 경우만 새로운 배열에 포함됨

```
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const biggerThanFive = array.filter(number => number > 5);
// 결과 : [6, 7, 8, 9, 10]
```

#### 10.3.3.2 todos 배열에서 id로 항목 지우기

```
# App.js

import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;
```

#### 10.3.3.3 TodoListItem에서 삭제 함수 호출하기

- TodoListItem에서 방금 만든 onRemove 함수를 사용하려면 우선 TodoList 컴포넌트를 거쳐야 함
- props로 받아 온 onRemove 함수를 TodoListItems에 그대로 전달

```
# TodoList.js

import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoList;
```

```
# TodoListItem.js

import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
```

### 10.3.4 수정 기능

- onToggle이라는 함수를 App에 만들고, 해당 함수를 TodoList 컴포넌트에게 props로 넣어 줌
- TodoList를 통해 TodoListItem까지 전달해주면 됨

#### 10.3.4.1 onToggle 구현하기

```
# App.js

import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                checked: !todo.checked,
              }
            : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
```

- 배열 내장 함수 map을 사용하여 특정 id를 가지고 있는 객체의 checked 값을 반전시켜 줌
- 불변성을 유지하면서 특정 배열 원소를 업데이트해야 할 때 이렇게 map을 사용

#### 10.3.4.2 TodoListItem에서 토글 함수 호출하기

- App에서 만든 onToggle 함수를 TodoListItem에서도 호출할 수 있도록 TodoList를 거쳐 TodoListItem에게 전달

```
# TodoList.js

import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
```

```
# TodoListItem.js

import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
```

# 11장 컴포넌트 성능 최적화

## 11.1 많은 데이터 렌더링하기

- 많은 데이터를 넣게 되면 렉이 걸림
- 이전보다 훨씬 느려짐

## 11.2 크롬 개발자 도구를 통한 성능 모니터링

- 리액트 개발자 도구의 Components 탭, 그 우측에 Profiler라는 탭에서의 좌측 상단에 파란색 녹화 버튼
- 화면에 변화가 반영되면 녹화 버튼을 한 번 더 누르기

## 11.3 느려지는 원인 분석

- 컴포넌트는 다음과 같은 상황에서 리렌더링 발생
  1. 자신이 전달받은 props가 변경될 때
  2. 자신의 state가 바뀔 때
  3. 부모 컴포넌트가 리렌더링될 때
  4. forceUpate 함수가 실행될 때
- 리렌더링이 불필요할 때는 리렌더링을 방지

## 11.4 React.memo를 사용하여 컴포넌트 성능 최적화

- 컴포넌트의 props가 바뀌지 않았다면, 리렌더링하지 않도록 설정하여 함수 컴포넌트의 리렌더링 성능을 최적화해 줄 수 있음

```
# TodoListItem.js

import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
```

## 11.5 onToggle, onRemove 함수가 바뀌지 않게 하기

- todos 배열이 업데이트되면 onRemove와 onToggle 함수도 새롭게 바뀜
- onRemove와 onToggle 함수는 배열 상태를 업데이트하는 과정에서 최신 상태의 todos를 참조하기 때문에 todos 배열이 바뀔 때마다 함수가 새로 만들어짐
- 함수가 계속 만들어지는 상황을 방지하는 방법
  - useState의 함수형 업데이트 기능을 사용
  - useReducer를 사용하는 것

### 11.5.1 useState의 함수형 업데이트

- setTodos를 사용할 때 새로운 상태를 파라미터로 넣는 대신, 상태 업데이트를 어떻게 할지 정의해 주는 업데이트 함수를 넣기 (함수형 업데이트)

```
# App.js

import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링해 보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // nextId 1씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo
      )
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
```

### 11.5.2 useReducer 사용하기

```
# App.js

import { useState, useRef, useCallback, useReducer } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT": // 새로 추가
      // { type: "INSERT", todo : {id : 1, text : 'todo', checked : fasle}}
      return todos.concat(action.todo);
    case "REMOVE": // 제거
      // { type: "REMOVE", id : 1}

      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE": // 토글
      // { type: "TOGGLE", id : 1}
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: "INSERT", todo });
    nextId.current += 1; // nextId 1씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
```

- useReducer를 사용할 때는 원래 두 번째 파라미터에 초기 상태를 넣어줘야 함
- 지금은 두 번째 파라미터에 undefined를 넣고, 세 번째 파라미터에 초기 상태를 만들어 주는 함수은 createBulkTodos를 넣어 줌
- 컴포넌트가 맨 처음 렌더링될 때만 createBulkTodos 함수 호출됨

## 11.6 불변성의 중요성

- 기존의 값을 직접 수정하지 않으면서 새로운 값을 만들어 내는 것을 '불변성을 지킨다'고 함

## 11.7 TodoList 컴포넌트 최적화하기

```
# TodoList.js

import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
```

## 11.8 react-virtualized를 사용한 렌더링

- 리스트 컴포넌트에서 스크롤되기 전에 보이지 않는 컴포넌트는 렌더링하지 않고 크기만 차지하게끔 함
- 스크롤되면 해당 스크롤 위치에 보여 주어야 할 컴포넌트를 자연스럽게 렌더링

### 11.8.1 최적화 준비

```
npm add react-virtualized
```

### 11.8.2 TodoList 수정

```
# TodoList.js

import React, { useCallback } from "react";
import { List } from "react-virtualized";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos]
  );
  return (
    <List
      className="TodoList"
      width={512} // 전체 크기
      height={513} // 전체 높이
      rowCount={todos.length} // 항목 개수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
      list={todos} // 배열
      style={{ outline: "none" }} // List에 기본 적용되는 outline 스타일 제거
    />
  );
};

export default React.memo(TodoList);
```

### 11.8.3 TodoListItem 수정

```
# TodoListItem.js

import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn("checkbox", { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
```

```
# TodoListItem.scss

// 엘리먼트 사이사이에 테두리를 넣어 줌
& + & {
  border-top: 1px solid #dee2e6;
}
&:nth-child(even) {
  background: #f8f9fa;
}
```

# 12장 immer를 사용하여 더 쉽게 불변성 유지하기

## 12.1 immer를 설치하고 사용법 알아보기

### 12.1.1 프로젝트 준비

```
npm add immer
```

### 12.1.2 immer를 사용하지 않고 불변성 유지

```
# App.js

import { useRef, useCallback, useState } from "react";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: [value],
      });
    },
    [form]
  );

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array에 새 항목 등록
      setData({
        ...data,
        array: data.array.concat(info),
      });

      // form 초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    (id) => {
      setData({
        ...data,
        array: data.array.filter((info) => info.id !== id),
      });
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
```

### 12.1.3 immer 사용법

- immer 사용하면 불변성을 유지하는 작업을 매우 간단하게 처리 가능

```
import produce from 'immer';
const nextState = produce(originalState, draft => {
  // 바꾸고 싶은 값 바꾸기
  draft.somewhere.deep.inside = 5;
})
```

- produce라는 함수는 두 가지 파라미터
  - 수정하고 싶은 상태
  - 상태를 어떻게 업데이트할지 정의하는 함수 : 전달되는 함수 내부에서 원하는 값을 변경하면, produce 함수가 불변성 유지를 대신해 주면서 새로운 상태 생성
- '불변성에 신경 쓰지 않는 것처럼 코드를 작성하되 불변성 관리는 제대로 해 주는 것'

### 12.1.4 App 컴포넌트에 immer 적용하기

```
# App.js

import { useRef, useCallback, useState } from "react";
import produce from "immer";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        produce(form, (draft) => {
          draft[name] = value;
        })
      );
    },
    [form]
  );

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array에 새 항목 등록
      setData(
        produce(data, (draft) => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    (id) => {
      setData(
        produce(data, (draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1
          );
        })
      );
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
```

- immer를 사용하여 컴포넌트 상태를 작성할 때는 객체 안에 있는 값을 직접 수정하거나, 배열에 직접적인 변화를 일으키는 push, splice 등의 함수를 사용해도 무방
- immer는 불변성을 유지하는 코드가 복잡할 때만 사용해도 충분

### 12.1.5 useState의 함수형 업데이트와 immer 함께 쓰기

```
const [number, setNumber] = useState(0);
// prevNumbers는 현재 number 값을 가리킵니다.
const onIncrease = useCallback(
  () => setNumber(prevNumber => prevNumber + 1),
  [],
);
```

=> immer에서 제공하는 produce 함수를 호출할 때, 첫 번째 파라미터가 함수 형태이면 업데ㅣ트 함수 반환

- App.js 수정

```
import { useRef, useCallback, useState } from "react";
import produce from "immer";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        produce((draft) => {
          draft[name] = value;
        })
      );
    },
    [form]
  );

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array에 새 항목 등록
      setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    (id) => {
      setData(
        produce((draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1
          );
        })
      );
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
```

# 13장 리액트 라우터로 SPA 개발하기

## 13.1 SPA란?

- SPA(Single Page Application) : 한 개의 페이지로 이루어진 에플리케이션
- 라우팅 : 다른 주소에 다른 화면을 보여 주는 것
- 리액트 라우팅 라이브러리 : 리액트 라우터, 리치 라우터, Next.js 등

### 13.1.1 SPA 단점

- SPA의 단점은 앱의 규모가 커지면 자바스크립트 파일이 너무 커짐
- 페이지 로딩 시 사용자가 실제로 방문하지 않을 수도 있는 페이지의 스크립트도 불러오기 때문
- 코드 스플리팅을 사용하면 라우트별로 파일들을 나누어서 트래픽과 로딩 속도를 개선 가능
- 리액트 라우터처럼 브라우전에서 자바스크립트를 사용하여 라우팅을 관리하는 것은 자바스크립트를 실행하지 않는 일반 크롤러에서는 페이지의 정보를 제대로 수집해 가지 못함
- 자바스크립트가 실행할 때까지 페이지가 비어 있기 때문에 자바스크립트 파일이 로딩되어 실행되는 짧은 시간 동안 한 페이지가 나타날 수 있다는 단점이 있음
- 이들은 렌더링을 통해 모두 해결 가능

## 13.2 프로젝트 준비 및 기본적인 사용법

### 13.2.1 프로젝트 생성 및 라이브러리 설치

```
npm add react-router-dom
```

=> 리액트 라우터 라이브러리 설치

### 13.2.2 프로젝트에 라우터 적용

```
# index.js

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### 13.2.3 페이지 만들기

```
# pages/Home.js

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>홈, 그 페이지는 가장 먼저 보여지는 페이지</p>
    </div>
  );
};

export default Home;
```

```
# pages/About.js

const About = () => {
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
    </div>
  );
};

export default About;
```

### 13.2.4 Route 컴포넌트로 특정 주소에 컴포넌트 연결

```
<Route path="주소 규칙" component={보여 줄 컴포넌트} />
```

```
# App.js

import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
```

### 13.2.5 Link 컴포넌트를 사용하여 다른 주소로 이동하기

- Link 컴포넌트는 클릭하면 다른 주소로 이동시켜 주는 컴포넌트
- 일반 웹 어플리케이션에서처럼 a 태그를 사용하여 페이지 전환 사용 불가
- 페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문에 어플리케이션이 들고 있던 상태들은 모두 날라감
- 렌더링된 컴포넌트들도 모두 사라지고 다시 처음부터 렌더링하게 됨
- Link 컴포넌트를 사용하여 페이지를 전환하면, 페이지를 새로 불러오지 않고 어플리케이션은 그대로 유지한 상태에서 HTML5 History API를 사용하여 페이지의 주소만 변경

```
<Link to="주소">내용</Link>
```

```
# App.js

import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
```

## 13.3 Route 하나에 여러 개의 path 설정하기

- path props를 배열로 설정해 주면 여러 경로에서 같은 컴포넌트를 보여 줄 수 있음

```
# App.js

import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
```

## 13.4 URL 파라미터와 쿼리

- 페이지 주소를 정의할 때 유동적인 값을 전달해야 하는 경우도 있음
- 파라미터와 쿼리로 나눌 수 있음
  - 파라미터 예시 : /profile/velopert
  - 쿼리 예시 : /about?details=true
- 유동적인 값을 사용해야 하는 상황에서 파라미터를 써야 할지 쿼리를 써야 할지 정할 때, 무조건 따라야 하는 규칙은 없음
- 다만 일반적으로 파라미터는 지정 아이디 혹은 이름을 사용하여 조회할 때 사용, 쿼리는 우리가 어떤 키워드를 검색하여 페이지에 필요한 옵션을 전달할 때 사용

### 13.4.1 URL 파라미터

- profile 페이지에서 파라미터 사용하기
- profile/velopert와 같은 형식으로 뒷부분에 유동적인 username 값을 넣어 줄 때 해당 값을 props로 받아 와서 조회하기

```
# pages/Profile.js

import { useParams } from "react-router-dom";

const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
```

- URL 파라미터는 useParams 라는 Hook을 사용하여 객체 형태로 조회 가능
- URL 파라미터의 이름은 라우트 설정을 할 때 Route 컴포넌트의 path props를 통하여 설정
- 위 코드에서는 data 객체에 예시 프로필 정보들을 key-value 형태로 담아둠
- Profile 컴포넌트에서는 username URL 파라미터를 통하여 프로필을 조회한 뒤에 프로필이 존재하지 않으면 ‘존재하지 않는 프로필입니다.’ 라는 문구를 보여주고 존재한다면 프로필 정보를 보여주도록 로직을 작성

```
# App.js

import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
    </Routes>
  );
};

export default App;
```

- 만약 URL 파라미터가 여러개인 경우엔 /profiles/:username/:field 와 같은 형태로 설정 가능

```
# pages/Home.js

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/velopert">velopert의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
```

### 13.4.2 URL 쿼리

- useLocation 이라는 Hook을 사용, location 객체를 반환하며 이 객체는 현재 사용자가 보고있는 페이지의 정보를 지니고 있음
- 이 객체에는 다음과 같은 값들 존재
  - pathname : 현재 주소의 경로 (쿼리스트링 제외)
  - search : 맨 앞의 ? 문자 포함한 쿼리스트링 값
  - has : 주소의 # 문자열 뒤의 값 (주로 History API 가 지원되지 않는 구형 브라우저에서 클라이언트 라우팅을 사용할 때 쓰는 해시 라우터에서 사용)
  - state : 페이지로 이동할때 임의로 넣을 수 있는 상태 값
  - key : location 객체의 고유 값, 초기에는 default 이며 페이지가 변경될때마다 고유의 값이 생성됨
- 쿼리스트링은 location.search 값을 통해 조회 가능

```
# pages/About.js

import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>쿼리스트링: {location.search}</p>
    </div>
  );
};

export default About;
```

- 쿼리스트링 값이 현재 ?detail=true&mode=1 으로 표시가 되고 있음
- 이 문자열에서 앞에 있는 ? 로 지우고, & 문자열로 분리한뒤 key 와 value 를 파싱하는 작업을 해야 함
- 이 작업은 보통 npm 에서 qs 또는 querystring 패키지를 설치해서 처리 가능

```
npm add qs
```

```
# pages/About.js

import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };
7
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
```

- useSearchParams는 배열 타입의 값을 반환하며, 첫번째 원소는 쿼리파라미터를 조회하거나 수정하는 메서드들이 담긴 객체를 반환
- get 메서드를 통해 특정 쿼리파라미터를 조회할 수 있고, set 메서드를 통해 특정 쿼리파라미터를 업데이트 가능
- 만약 조회시에 쿼리파라미터가 존재하지 않는다면 null 로 조회됨
- 두번 째 원소는 쿼리파라미터를 객체형태로 업데이트할 수 있는 함수를 반환
- 쿼리 파라미터를 조회할 때 값은 무조건 문자열 타입이라는 것, true 또는 false 값을 넣게 된다면 값을 비교할 때 꼭 'true' 와 같이 따옴표로 감싸서 비교를 하셔야 하고, 숫자를 다루게 된다면 parseInt 를 사용하여 숫자 타입으로 변환을 해야 함

## 13.5 중첩된 라우트

```
# pages/Articles.js

import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <ul>
      <li>
        <Link to="/articles/1">게시글 1</Link>
      </li>
      <li>
        <Link to="/articles/2">게시글 2</Link>
      </li>
      <li>
        <Link to="/articles/3">게시글 3</Link>
      </li>
    </ul>
  );
};

export default Articles;
```

```
# pages/Article.js

import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>게시글 {id}</h2>
    </div>
  );
};

export default Article;
```

```
# App.js

import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} />
    </Routes>
  );
};

export default App;
```

```
# pages/Home.js

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/velopert">velopert의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
```

- 중첩된 라우트를 사용한다면 좀 더 나은 방식으로 구현 가능

```
# App.js

import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  );
};

export default App;
```

- Articles 컴포넌트에서 리액트 라우터에서 제공하는 Outlet 이라는 컴포넌트를 사용해 주어야 함
- 이 컴포넌트는 Route 의 children 으로 들어가는 JSX 엘리먼트를 보여주는 역할
- 지금의 경우엔 다음 내용이 Outlet 컴포넌트를 통해서 보여짐

```
<Route path=":id" element={<Article />} />
```

```
# pages/Articles.js

import { Link, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
```

### 13.5.1. 공통 레이아웃 컴포넌트

- 중첩된 라우트와 Outlet 은 페이지끼리 공통적으로 보여줘야 하는 레이아웃이 있을때도 유용하게 사용
- 예를 들어서, Home, About, Profile 페이지에서 상단에 헤더를 보여줘야 하는 상황을 가정
  - 첫 번째로 드는 생각은 아마 Header 컴포넌트를 따로 만들어두고 각 페이지 컴포넌트에서 재사용을 하는 방법
  - 중첩된 라우트와 Outlet을 활용하여 구현 가능
  - 중첩된 라우트를 사용하는 방식을 사용하면 컴포넌트를 한 번만 사용해도 됨
- 이번에는 중첩된 라우트를 통해 공통 레이아웃 컴포넌트를 사용해보기

```
# Layout.js
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
```

```
# App.js

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  );
};

export default App;
```

### 13.5.2. index props

- Route 컴포넌트에는 index 라는 props가 존재, 이 props 는 path="/"와 동일한 의미를 가짐

```
# App.js

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  );
};

export default App;
```

## 13.6 리애특 라우터 부가 기능

### 13.6.1 useNavigate

- useNavigate는 Link 컴포넌트를 사용하지 않고 다른 페이지로 이동을 해야 하는 상황에 사용하는 Hook

```
# Layout.js

import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goArticles = () => {
    // articles 경로로 이동
    navigate("/articles");
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
```

- 다른 페이지로 이동을 할 때 replace 라는 옵션 존재, 이 옵션을 사용하면 페이지를 이동할 때 현재 페이지를 페이지 기록에 남지 않음

```
# Layout.js - goAlticle() 함수

const goArticles = () => {
  navigate("/articles", { replace: true });
};
```

### 13.6.2. NavLink

- NavLink 컴포넌트는 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우 특정 스타일 또는 CSS 클래스를 적용하는 컴포넌트
- 이 컴포넌트를 사용할 때 style 또는 className을 설정할 때 { isActive: boolean } 을 파라미터로 전달받는 함수 타입의 값을 전달

```
<NavLink
  style={({isActive}) => isActive ? activeStyle : undefined}
/>
```

```
<NavLink
  className={({isActive}) => isActive ? 'active' : undefined}
/>
```

```
# pages/Articles.js

import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <NavLink
            to="/articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 3
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
```

- 페이지 리팩토링

```
# pages/Articles.js

import { NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;
```

### 13.6.3. NotFound 페이지 만들기

- NotFound 페이지는 사전에 정의되지 않는 경로에 사용자가 진입했을 때 보여주는 페이지 (즉, 페이지를 찾을 수 없을 때 나타나는 페이지)

```
# pages/NotFound.js

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 64,
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      404
    </div>
  );
};

export default NotFound;
```

```
# App.js

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
```

- - 는 wildcard 문자, 이는 아무 텍스트나 매칭한다는 뜻
- 이 라우트 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 됨

### 13.6.4. Navigate 컴포넌트

- Navigate 컴포넌트는 컴포넌트를 화면에 보여주는 순간 다른 페이지로 이동을 하고 싶을 때 사용하는 컴포넌트
- 페이지를 리다이렉트 하고 싶을 때 사용
- 예를 들어서, 사용자의 로그인이 필요한 페이지인데 로그인을 안했다면 로그인 페이지를 보여줌

```
pages/Login.js

const Login = () => {
  return <div>로그인 페이지</div>;
};

export default Login;
```

```
pages/MyPage.js

import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div>마이 페이지</div>;
};

export default MyPage;
```

- 현재 코드는 isLoggedIn은 현재 false라는 고정값을 가지고 있지만, 이 값이 로그인 상태에 따라 true 또는 false를 가르킨다고 가정
- 위 컴포넌트에서는 만약 이 값이 false 라면 Navigate 컴포넌트를 통해 /login 경로로 이동
- 여기서 replace props는 useNavigate 에서 설명한 것과 동일
- 페이지를 이동할 때 현재 페이지를 기록에 남기지 않기 때문에 이동 후 뒤로가기를 눌렀을 때 2페이지 전의 페이지로 이동

```
# App.js

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
```
