import { Component } from "react";
import "../App.css";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // state의 초깃값 설정하기
//     this.state = {
//       number: 0,
//       fixedNumber: 0,
//     };
//   }
//   render() {
//     const { number, fixedNumber } = this.state;
//     return (
//       <div className="state">
//         <h1>{number}</h1> <br />
//         {/* <h2>{fixedNumber}</h2> */}
//         <div className="btn">
//           <button
//             onClick={() => {
//               this.setState({ number: number + 1 });
//               console.log("clicked!");
//             }}
//           >
//             +1
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

class Counter extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <div className="state">
        <h1>{number}</h1>
        <div className="btn">
          <button
            onClick={() => {
              this.setState({ number: number + 1 });
              console.log("clicked!");
            }}
          >
            +1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
