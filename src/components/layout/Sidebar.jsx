//Import own components
import NewProjects from "../project/NewProjects"
import ListProjects from "../project/ListProjects/ListProjects"
export default function Sidebar() {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>

      <NewProjects />

      <div className="proyectos">
        <h2>Tus Proyectos</h2>
        <ListProjects />
      </div>
    </aside>
  )
}
