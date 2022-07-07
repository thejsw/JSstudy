import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다");
    console.log({
      name,
      nickname,
    });
  }, [name]);

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
