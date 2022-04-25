import { Component } from "react";
import PropTypes from "prop-types";

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

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.prototype = {
  name: PropTypes.string.isRequired,
};

export default MyComponent;
