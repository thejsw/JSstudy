import "../App.css";
import PropTypes from "prop-types";

// Props 사용하여 값 전달하기, defualtProps를 통해 기본 Props 지정하기
// const MyComponent = (props) => {
//   return (
//     <div className="react">
//       나의 새롭고 멋진 컴포넌트 {props.name} <br />
//       나의 새롭고 멋진 children {props.children}
//     </div>
//   );
// };
// MyComponent.defaultProps = {
//   name: "MyComponent",
// };

// export default MyComponent;

// 비구조화 할당(객체에서 값을 추출하는)을 통해 props 활용하기, isRequired를 통해 propTypes 지정하기
const MyComponent = ({ name, children }) => {
  return (
    <div className="react">
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MyComponent;
