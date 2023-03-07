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
