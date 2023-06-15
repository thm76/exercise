import { FunctionComponent, useEffect } from "react";
import { useResource } from "@helpers/use-resource";
import s from "./App.module.scss"
import {NavLink, Outlet} from "react-router-dom";

export const App: FunctionComponent = (props) => {
  useResource("/api/hello")

  return <div className={s.app}>
    <header><h1>Demo</h1></header>
    <main>
      <NavLink to="exercise/using-passwords">Using Passwords</NavLink>
      <Outlet/></main>
  </div>;
};
