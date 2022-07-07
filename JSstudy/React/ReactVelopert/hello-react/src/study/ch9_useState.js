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
        <input vlaue={name} onChange={onChangeName} />
        <input vlaue={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        이름: <b>{name}</b>
        <br />
        닉네임: <b>{nickname}</b>
      </div>
    </div>
  );
};

export default Info;
