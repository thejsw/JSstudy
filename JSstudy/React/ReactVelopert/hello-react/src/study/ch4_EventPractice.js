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
        <h1>이벤트연습</h1>
        <input
          text="text"
          name="message"
          placeholder="입력해 보세요"
          value={this.state.message}
          onChange={this.state.message}
        />
        <button onClick={this.state.message}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
