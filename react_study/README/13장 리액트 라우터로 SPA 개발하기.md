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
