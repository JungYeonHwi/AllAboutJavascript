# 15장 Context API

## 15.1 Context API를 사용한 전역 상태 관리 흐름 이해하기

- 최상위 컴포넌트에서 여러 컴포넌트를 거쳐 props로 원하는 상태와 함수를 전달
- Context API를 사용하면 Context를 만들어 단 한 번에 원하는 값을 받아 와서 사용 가능

## 15.2 Context API 사용법 익히기

### 15.2.1 새 Context 만들기

```
# contexts/color.js

import { createContext } from "react"

const ColorContext = createContext({color : "black"})

export default ColorContext;
```

### 15.2.2 Consumer 사용하기

- ColorBox라는 컴포넌트에서 ColorContext 안에 들어 있는 색상을 보여줄 때 props로 받아 오는 것이 아니라 Consumer라는 컴포넌트를 통해 색상 조회

```
# components/ColorBox.js

import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {value => (
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color
          }}
        />
      )}
    </ColorContext.Consumer>
  )
}
```

- Constumer 사이에 중괄호를 열어서 그 안에 함수를 넣는 패턴 : Function as a child 혹은 Render Props (컴포넌트의 children이 있어야 할 자리에 일반 JSX 혹은 문자열이 아닌 함수 전달)

```
# App.js

import ColorBox from "./components/ColorBox";

const App = () => {
  return (
    <div>
      <ColorBox />
    </div>
  )
}

export default App;
```

### 15.2.3 Provider

- Provider를 사용하면 Context의 value를 변경 가능

```
# App.js

import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color"

const App = () => {
  return (
    <ColorContext.Provider value={{color : "red"}}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>

  )
}

export default App;
```

## 15.3 동적 Context 사용하기

- Context의 value에는 무조건 상태 값만 있어야 하는 것이 아니라 함수를 전달해 줄 수도 있음

### 15.3.1 Context 파일 수정하기

```
# contexts/color.js
import { createContext, useState } from "react";

const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => { },
    setSubcolor: () => { }
  }
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor }
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  )
}

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer  ColorConsumer}  = ColorContext;;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
```

### 15.3.2 새로워진 Context를 프로젝트에 반영하기

```
# App.js

import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  )
}

export default App;
```

```
# components / ColorBox.js

import ColorConsumer from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {value => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: value.state.color
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: value.state.subcolor
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;

# 객체 비구조화 할당 문법을 사용하면 value를 조회하는 것을 생략 가능

# components / ColorBox.js

import ColorConsumer from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({ state }) => {
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subcolor
            }}
          />
        </>
      }}
    </ColorConsumer>
  );
};

export default ColorBox;
```

### 15.3.3 색상 선택 컴포넌트 만들기

```
# components/SelectColors.js

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <div style={{display : : "flex"}}>
        {colors.map(color => (
          <div
            key={color}
            style={{
              background : color,
              width : "24px",
              height : "24px",
              cursor : "pointer"
            }}
            />
        ))}
      </div>
      <hr/>
    </div>
  )
}

export default SelectColors;
```

```
# App.js

import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  )
}
```

```
# components/SelectColors.js
import { ColorConsumer } from ",,/contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map(color => (
              <div
                key={color}
                style={{ background: color, width: "24px", height: "24px", cursor: "pointer" }}
                onClick={() => actions.setColor(color)}
                onContextMenu={e => {
                  e.preventDefault(); // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
      </ColorConsumer>
      <hr />
    </div>
  )
}

export default SelectColors;
```

## 15.4 Consumer 대신 Hook 또는 static contextType 사용하기
