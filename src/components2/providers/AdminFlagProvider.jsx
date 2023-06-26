import { createContext, useState } from "react";

// これを他のコンポーネントとかで呼ぶ
export const AdminFlagContext = createContext({});

// なんでここ更新読んだりしてないのに動くんだろう？
export const AdminFlagProvider = (props) => {
  const { children } = props;
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AdminFlagContext.Provider value={[isAdmin, setIsAdmin]}>
      {children}
    </AdminFlagContext.Provider>
  );
};
