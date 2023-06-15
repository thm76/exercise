import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";
import { HashRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { ExercisePage } from "@components/ExercisePage/ExercisePage";
import { ExerciseProvider } from "@providers/ExerciseProvider";
import "./base.scss"

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/*" element={<App />}>
          <Route
            path="exercise/:name/*"
            element={
              <ExerciseProvider>
                <Outlet />
              </ExerciseProvider>
            }
          >
            <Route path=":id" element={<ExercisePage />} />
            <Route path="*" element={<Navigate to="./1" />} />
          </Route>
          <Route
            path="*"
            element={<Navigate to="exercise/using-passwords" />}
          />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
