import { Link, Outlet } from "react-router-dom";
import navStyle from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <>
      <div className={navStyle.nav}>
        <h2 className={navStyle.title}>Shaban Irshad</h2>

        <div className={navStyle.rightNavDiv}>
          <ul>
            <li>
              <Link
                to="/"
                className={active === "home" ? navStyle.activeLink : ""}
                onClick={() => setActive("home")}
              >
                Home
              </Link>
            </li>
           
           
            <li>
              <Link
                to="/projects"
                className={active === "projects" ? navStyle.activeLink : ""}
                onClick={() => setActive("projects")}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className={active === "contact" ? navStyle.activeLink : ""}
                onClick={() => setActive("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className={navStyle.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;