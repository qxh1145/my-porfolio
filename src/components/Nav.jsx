import { HiArrowUpRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "var(--text-color)",
  fontFamily: "Courier New, Courier, monospace",
  fontSize: "23px",
};

const Nav = () => {
  return (
    <nav>
      <ul style={{ listStyle: "none", gap: "10px", padding: 0, margin: 0, paddingLeft: "2vh" }}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} style={linkStyle}>
            {({ isActive }) => (isActive ? "●" : <><HiArrowUpRight /> Home</>)}
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")} style={linkStyle}>
            {({ isActive }) => (isActive ? "●" : <><HiArrowUpRight /> Project</>)}
          </NavLink>
        </li>
        <li>
          <NavLink to="/info" className={({ isActive }) => (isActive ? "active" : "")} style={linkStyle}>
            {({ isActive }) => (isActive ? "●" : <><HiArrowUpRight /> Info</>)}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} style={linkStyle}>
            {({ isActive }) => (isActive ? "●" : <><HiArrowUpRight /> Contact</>)}
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")} style={linkStyle}>
            {({ isActive }) => (isActive ? "●" : <><HiArrowUpRight /> Skill & Knowleadge</>)}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};


export default Nav;
