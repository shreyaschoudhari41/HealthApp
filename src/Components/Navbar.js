import React from "react";
import{Link} from "react-router-dom"

function Navbar() {

  const Diabetes = ()=>{
    window.open("https://www.who.int/news-room/fact-sheets/detail/diabetes","_blanlk");
  }

  const Bloodpressure = ()=>{
    window.open("https://www.cdc.gov/bloodpressure/about.htm","_blank");
  }

  const HeartAttack = ()=>{
    window.open("https://www.mayoclinic.org/diseases-conditions/heart-attack/symptoms-causes/syc-20373106","_blank");
  }

  const Malaria = ()=>{
    window.open("https://www.who.int/news-room/fact-sheets/detail/malaria","_blank");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  text-light" style={{backgroundColor:"#58515173"}}>
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
                Most Common Diseases
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" onClick={Diabetes}>
                  Diabetes
                </Link>
                <Link className="dropdown-item"  onClick={Bloodpressure}>
                  Blood Pressure
                </Link>
                
                <Link className="dropdown-item"  onClick={HeartAttack}>
                  Heart Attack
                </Link>
                <Link className="dropdown-item"  onClick={Malaria}>
                  Malaria
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
