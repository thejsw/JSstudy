import ColorBox from "./context/colorBox";
import { ColorProvider } from "./context/color";
import SelectColors from "./context/SelectColors";

const App = () => {
  return (
    <ColorProvider value={{ color: "red" }}>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
