import { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
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
