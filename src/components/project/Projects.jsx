//Import functions react
import React from "react";
//Import own components
import Bars from "../layout/Bar";
import FormAsk from "../asks/FormAsk";
import ListAsk from "../asks/ListsAsk";
import Sidebar from "../layout/Sidebar";
const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Bars />
        <main>
          <FormAsk />
          <div className="contenedor-tareas">
            <ListAsk/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
