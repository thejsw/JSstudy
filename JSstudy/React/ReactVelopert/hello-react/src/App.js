import "./App.css";

function App() {
  const name = "jsw";
  return (
    <div className="react">
      {/* name이 jsw일 때 문자열 출력 */}
      {name === "jsw" && <h1>{name}입니다.</h1>}
      {/* name이 undefined일 때 문자열 출력 */}
      {/* { name || <h1>지정되지 않았습니다.</h1>} */}
    </div>
  );
}

export default App;
