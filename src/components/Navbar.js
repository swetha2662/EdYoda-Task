import React from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";

class Navbar extends React.Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand edyoda" href="#">
            EDYODA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action 3
                    </a>
                  </li>
                </ul>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Programs
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action 3
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaSearch style={{ color: "black" }} />
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-primary" href="#">
                  JOIN NOW
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
