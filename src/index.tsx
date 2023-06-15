import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { ExercisePage } from "@components/ExercisePage/ExercisePage";
import { ExerciseProvider } from "@providers/ExerciseProvider";

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
            <Route path="*" element={<Navigate to="./0" />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
