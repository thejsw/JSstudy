import { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="메세지를 입력하세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;
