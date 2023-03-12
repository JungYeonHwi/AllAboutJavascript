# Recoil 이란?

- 페이스북에서 만든 상태 관리 라이브러리 (2020년 5월)
- 다른 상태 관리 라이브러리(Redux, MobX)와는 달리 React 전용 (React에 최적화)

## 상태 관리가 필요한 이유

react의 props를 통해서 부모 컴포넌트에서 자식 컴포넌트로 값을 보낼 수 있음
-> 코드가 복잡해질수록 어디서 어떤 값을 받고, 근원지를 확인해야 함
-> 상태 관리를 할 수 있는 일종의 상자에서 전역적으로 관리해 놓으면 어디에서든 꺼내어 값을 사용 가능

# Recoil vs Reux

- 간결한 코드
  - Redux는 reduce, middleware 등 boilerplate 코드가 많이 발생함
  - Recoil은 Redux 보다 더 적은 코드로 상태 관리 가능
- 상태 업데이트 방식
  - Redux에서는 상태를 변경하기 위해 불변성을 유지해야 함
  - Recoil은 제약 없음
- 선언적인 상태 관리 : Recoil은 React의 선언적인 방식과 같이 상태를 선언적으로 관리 -> 코드의 가독성과 유지보수성 향상
- 유연성
  - Recoil은 컴포넌트 간 상태 전달을 쉽게 할 수 있음
  - 서버 사이드 렌더링을 지원하며, TS와 함께 사용하기 좋음
- side effect : Recoil은 AtomEffect를 사용하여 자체적으로 정의 가능

# Atom

- Recoil의 상태 단위
- 저장되고 갱신되는 데이터는 모두 Atom을 기반
- Atom이 업데이트 되면 그 상태를 subscribe하고 있는 컴포넌트는 새로운 값으로 반영되고 rerender
- Atom은 런타임에 생성 가능
- Atom은 `atom()` 함수에 **key** 와 **default**을 전달해서 작성

```
const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14,
});
```

- `atomFamily()` 전달한 매개 변수에 따라 Atom을 반환

```
const elementPositionStateFamily = atomFamily({
  key: 'ElementPosition',
  default: [0, 0],
});

function ElementListItem({elementID}) {
  const position = useRecoilValue(elementPositionStateFamily(elementID));
  return (
    <div>
      Element: {elementID}
      Position: {position}
    </div>
  );
}
```

# Selector

- Selector는 상태를 기반으로 전달된 데이터를 가공할 때 사용
- 상위의 Atom 이나 Selector가 업데이트 되면 하위의 Selector도 다시 실행됨
- 최소한의 상태 집합만 Atom에 저장하고 다른 모든 파생되는 데이터는 Selector에 명시한 함수를 통해 효율적으로 계산하여 쓸모없는 상태의 보존을 방지
- `Selector()` 함수를 사용하여 정의

```
# fontSizeState 상태를 가져와 fontSize를 출력

const fontSizeLabelState = selector({
  key: 'fontSizeLabelState', // unique ID
  get: ({get}) => { // 계산될 함수
    const fontSize = get(fontSizeState);
    const unit = 'px';

    return `${fontSize}${unit}`;
  },
});
```

- `useRecoilValue()` 를 사용하여 읽을 수 있음 : 하나의 Atom 이나 Selector를 인자로 받아 대응하는 값 반환
- `useRecoilState()` 를 사용하여 상태 설정 및 변경 가능

```
function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <>
      <div>Current font size: ${fontSizeLabel}</div>

      <button onClick={setFontSize(fontSize + 1)} style={{fontSize}}>
        Click to Enlarge
      </button>
    </>
  );
}
```

# 비동기 데이터 쿼리

- Recoil에서는 동기 / 비동기 함수 모두 **Selecotr** 에서 처리 가능 (단, React의 render() 함수가 동기이기 때문에 promise가 resolve 되기 전에 렌더링 할 수 없음)
- 대기 중인 데이터를 처리하기 위해 **React Suspense**와 함께 사용

```
# 컴포넌트를 Suspense 로 감싸서 대기중인 하위 항목들을 잡아내고 fallback UI 를 대신 render

// atom.js
export const todoIdState = atom({
  key: "todoIdState",
  default: 1
});

export const todoItemQuery = selector({
  key: "todoItemQuery",
  get: async ({ get }) => {
    const id = get(todoIdState);

    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    return response.data;
  }
});

// App.js
import { RecoilRoot } from "recoil";
import { Suspense } from "react";

import Container from "./container";

export default function App() {
  return (
      <RecoilRoot>
        <Suspense fallback={() => <p>Loading...</p>}>
          <Container />
        </Suspense>
      </RecoilRoot>
  );
}

// container/index.js
import { todoItemQuery } from "../atom";
import { useRecoilValue } from "recoil";

const Container = () => {
  const data = useRecoilValue(todoItemQuery);

  return <div>{data.title}</div>;
};

export default Container;
```

파라미터에 따라 비동기 데이터 요청을 위해서는 `selectorFamily()` 이요

```
// atom.js
import axios from 'axios';
import { selectorFamily } from 'recoil';

export const todoItemQuery = selectorFamily({
  key: "todoItemQuery",
  get: (id) => async () => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    return response.data;
  }
});


// App.js
import { RecoilRoot } from "recoil";
import { Suspense } from "react";

import Container from "./container";

export default function App() {
  return (
      <RecoilRoot>
        <Suspense fallback={() => <p>Loading...</p>}>
          <Container id={1} />
        </Suspense>
      </RecoilRoot>
  );
}


// container/index.js
import { todoItemQuery } from "../atom";
import { useRecoilValue } from "recoil";

const Container = ({ id }) => {
  const data = useRecoilValue(todoItemQuery(id));

  return <div>{data.title}</div>;
};

export default Container;
```
