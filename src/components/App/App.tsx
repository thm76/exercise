import { FunctionComponent } from "react";
import s from "./App.module.scss";
import { Outlet } from "react-router-dom";

export const App: FunctionComponent = (props) => {
  return (
    <div className={s.app}>
      <header>
        <h1>Demo</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
