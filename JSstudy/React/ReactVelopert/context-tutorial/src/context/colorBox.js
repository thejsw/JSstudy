import { ColorConsumer } from "./color";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({ state }) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              backgroundColor: state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
