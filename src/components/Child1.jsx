import { useState, memo } from "react";
import Child2 from "./Child2";
import Child3 from "./Child3";

const style = {
  height: "200px",
  backgroundColor: "lightblue",
  padding: "8px",
};

const Child1 = memo((props) => {
  console.log("Child1レンダリング");

  const [num, setNum] = useState(1);

  const clickButton = () => {
    setNum(num + 1);
  };

  const { clickResetButton } = props;

  return (
    <div style={style}>
      <p onClick={clickButton}>Child1 {num}</p>
      <button onClick={clickResetButton}>リセット</button>
      <Child2></Child2>
      <Child3></Child3>
    </div>
  );
});

export default Child1;
