import { memo } from "react";

const style = {
  height: "50px",
  backgroundColor: "lightgray",
};

const Child2 = memo((props) => {
  console.log("child2レンダリング");

  const { onClickResetChild2 } = props;

  return (
    <div style={style}>
      <p onClick={onClickResetChild2}>Child2</p>
    </div>
  );
});

export default Child2;
