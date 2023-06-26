import { useContext } from "react";
import { AdminFlagContext } from "./components2/providers/AdminFlagProvider";
import Card from "./components2/Card";

export const App2 = () => {
  // useContextでstate管理する
  // ここで直接provider呼んでstateの値更新できる！
  const [isAdmin, setIsAdmin] = useContext(AdminFlagContext);

  const adminText = isAdmin ? "管理者です" : "管理者ではありません";

  // ボタン押下時フラグ更新
  const onClickButton = () => {
    setIsAdmin((preIsAdmin) => !preIsAdmin);
  };

  return (
    <div>
      <p>{adminText}</p>
      <button onClick={onClickButton}>切り替える</button>
      <Card isAdmin={isAdmin}></Card>
    </div>
  );
};
