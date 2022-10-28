import React from "react";
import{Link} from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
      <a className="navbar-brand mx-2" href="/">Health App</a>
        {/* <h4 className="mx-2"></h4> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active mx-2">
              <Link className="nav-link" to="/about">
                About<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active mx-2">
              <Link className="nav-link" to="/news">
                News<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active mx-2">
              <Link className="nav-link" to="/emergency">
                Health Emergencies<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active mx-2">
              <Link className="nav-link" to="#">
                Covid-19<span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item dropdown mx-2">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Navigate
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Diabetes
                </Link>
                <Link className="dropdown-item" to="#">
                  Blood Pressure
                </Link>
                {/* <div className="dropdown-divider"></div> */}
                <Link className="dropdown-item" to="#">
                  Heart Attack
                </Link>
                <Link className="dropdown-item" to="#">
                  Malaria
                </Link>
                <Link className="dropdown-item" to="#">
                  Asthama
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
