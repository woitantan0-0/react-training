import { useState, memo } from "react";
import { useCallback } from "react";
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

  const onClickChildButton = useCallback(() => {
    setNum(num + 1);
  }, [num]);

  const onClickResetChild2 = useCallback(() => {
    console.log("child numの値が変わったよん");
    setNum(0);
  }, []);

  const { onClickResetButton } = props;

  return (
    <div style={style}>
      <p onClick={onClickChildButton}>Child1 {num}</p>
      <button onClick={onClickResetButton}>リセット</button>
      <Child2 onClickResetChild2={onClickResetChild2}></Child2>
      <Child3></Child3>
    </div>
  );
});

export default Child1;
