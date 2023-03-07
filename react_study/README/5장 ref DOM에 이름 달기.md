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
