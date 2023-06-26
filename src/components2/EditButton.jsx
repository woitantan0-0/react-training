import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

const EditButton = () => {
  // ここで直接provider呼んでstateの値参照できる！
  // 不要なpropsのバケツリレーをなくせる
  const [isAdmin] = useContext(AdminFlagContext);

  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};

export default EditButton;
