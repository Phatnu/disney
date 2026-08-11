import { Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      {/* child pages render here */}
      <Outlet />
    </div>
  )
}

export default Projects
