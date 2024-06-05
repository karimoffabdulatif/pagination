import { NavLink } from "react-router-dom"
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar">
        <NavLink to="/main/cars" className="navlink">
            Cars
        <i className="fa-solid fa-car"></i>
        </NavLink>
        <NavLink to="/main/posts" className="navlink">
            Posts
        <i className="fa-solid fa-house"></i>
        </NavLink>
        <NavLink to="/main/comments" className="navlink">
            Comments
        <i className="fa-solid fa-comment"></i>
        </NavLink>
        <NavLink to="/main/albums" className="navlink">
            Albums
        <i className="fa-solid fa-image"></i>
        </NavLink>
        <NavLink to="/main/photos" className="navlink">
            Photos
        <i className="fa-solid fa-camera-retro"></i>
        </NavLink>
        <NavLink to="/main/todos" className="navlink">
            Todos
        <i className="fa-solid fa-circle-check"></i>
        </NavLink>
        <NavLink to="/main/users" className="navlink">
            Users
        <i className="fa-solid fa-user"></i>
        </NavLink>
    </div>
  )
}

export default Sidebar