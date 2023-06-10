import { useState } from "react";
import { useEffect } from "react";
import ColorMessage from "./components/ColorMessage";

export const App = () => {
  console.log("再レンダリング:App");
  // state
  const [num, setNum] = useState(0);

  // ボタン押下時のイベント
  const clickButton = () => {
    setNum((preNum) => preNum + 1);
    setNum((preNum) => preNum + 1);
    setNum((preNum) => preNum + 1);
  };

  useEffect(() => {
    alert("初回表示です");
  }, []);

  return (
    <>
      <h1>Hellow World!</h1>
      <p>App.jsxに移動させたよ</p>
      <ColorMessage color="blue">
        <>
          <span>色が変わる文字だよ</span>
          <span>（あお〜）</span>
        </>
      </ColorMessage>
      <ColorMessage color="pink">
        <>
          <span>色が変わる文字だよ</span>
          <span>（ピンク〜）</span>
        </>
      </ColorMessage>
      <p>see you!</p>
      <button onClick={clickButton}>count up button</button>
      <p>{num}</p>
    </>
  );
};
