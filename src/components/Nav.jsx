import { HiArrowUpRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul style={{ listStyle: "none", gap: "10px", padding: 0, margin: 0 , paddingLeft: '2vh'}}>
        <li>●</li>
        <li>
          <NavLink to="#" style={{ textDecoration: "none", color: 'var(--text-color)', fontFamily: 'Courier New, Courier, monospace' , fontSize: '23px'}}><HiArrowUpRight  /> Project</NavLink>
        </li>
        <li>
          <NavLink to="#" style={{ textDecoration: "none", color: 'var(--text-color)', fontFamily: 'Courier New, Courier, monospace' , fontSize: '23px'}}><HiArrowUpRight /> Info</NavLink>
        </li>
        <li>
          <NavLink to="#" style={{ textDecoration: "none", color: 'var(--text-color)', fontFamily: 'Courier New, Courier, monospace' , fontSize: '23px'}}><HiArrowUpRight /> Contact</NavLink>
        </li>
        <li>
          <NavLink to="#" style={{ textDecoration: "none", color: 'var(--text-color)', fontFamily: 'Courier New, Courier, monospace' , fontSize: '23px'}}><HiArrowUpRight /> Skills &amp; Knowledge</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
