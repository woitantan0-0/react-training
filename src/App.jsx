import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import ColorMessage from "./components/ColorMessage";
import CssModules from "./components/CssModules";
import StyledJsx from "./components/StyledJsx";
import StyledComponents from "./components/StyledComponents";
import Emotion from "./components/Emotion";
import TailwindCss from "./components/TailwindCss";
import Child1 from "./components/Child1";
import Child4 from "./components/Child4";

export const App = () => {
  console.log("レンダリング:App");
  // state
  const [num, setNum] = useState(0);

  // ボタン押下時のイベント
  const clickButton = () => {
    setNum((preNum) => preNum + 1);
    setNum((preNum) => preNum + 1);
    setNum((preNum) => preNum + 1);
  };

  // リセットボタン押下時のイベント
  const clickResetButton = useCallback(() => {
    setNum(0);
  }, []);

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
      <CssModules></CssModules>
      <StyledJsx></StyledJsx>
      <StyledComponents></StyledComponents>
      <Emotion></Emotion>
      <TailwindCss></TailwindCss>
      <p>see you!</p>
      <button onClick={clickButton}>count up button</button>
      <p>{num}</p>
      <Child1 clickResetButton={clickResetButton}></Child1>
      <Child4></Child4>
    </>
  );
};
