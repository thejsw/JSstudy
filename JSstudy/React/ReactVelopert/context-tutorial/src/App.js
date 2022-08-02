import ColorBox from "./context/colorBox";
import { ColorProvider } from "./context/color";

const App = () => {
  return (
    <ColorProvider value={{ color: "red" }}>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
