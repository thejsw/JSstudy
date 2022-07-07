import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextID, setNextID] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextID,
      text: inputText,
    });
    setNextID(nextID + 1);
    setNames(nextNames);
    setInputText("");
  };

  const nameList = names.map((name, index) => (
    <li key={name.id}>{name.text}</li>
  ));
  return (
    <div>
      <input vlaue={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>;
    </div>
  );
};

export default IterationSample;
