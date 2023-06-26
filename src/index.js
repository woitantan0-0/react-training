// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
//import { App } from "./App";
import { App2 } from "./App2";
import { AdminFlagProvider } from "./components2/providers/AdminFlagProvider";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// App 基礎勉強
//root.render(<App tab="home" />);
// App2 グローバルなstate管理
root.render(
  <AdminFlagProvider>
    <App2 />
  </AdminFlagProvider>
);
console.log("レンダリング:index");

// ReactDOM.render(<App />, document.getElementById("root"));
