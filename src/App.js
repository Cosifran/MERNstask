import React from "react";
//Import own components
import Login from "./components/auth/Login";
import Projects from "./components/project/Projects";
import NewAccount from "./components/auth/NewAccount";
//Import router fuctions
import {createBrowserRouter, RouterProvider} from "react-router-dom";
//Import State
import AsksState from "./context/asks/AsksState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import ProjectState from "./context/projects/ProjectState";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: "Error",
    },
    {
      path: "/projects",
      element: <Projects />,
      errorElement: "Error",
    },
    {
      path: "/new-account",
      element: <NewAccount />,
      errorElement: "Error",
    },
  ]);
  return (
    <ProjectState>
      <AsksState>
        <AlertState>
          <AuthState>
            <RouterProvider router={router} />
          </AuthState>
        </AlertState>
      </AsksState>
    </ProjectState>
  );
}

export default App;
