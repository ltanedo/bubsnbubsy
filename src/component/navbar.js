import React from "react";
import { Link, Element, scroller } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation(props) {


  
  
  return (
    <div className="Navigation custom-font-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">BubsnBubsy</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="dropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Social Media
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown1">
                  <a className="dropdown-item" href="https://www.instagram.com/bubsnbubsy">Instagram</a>
                  <a className="dropdown-item" href="https://tiktok.com/@bubsnbubsy">Tiktok</a>
                  {/* <a className="dropdown-item" href="/">Youtube</a> */}
                </div>
              </li>
              <li className="nav-item active">
                <Link className="nav-link"
                    activeClass="active"
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust the offset as needed
                    duration={200}
                  >
                    About
                </Link>
              </li>
                

              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="dropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown 3
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown3">
                  <a className="dropdown-item" href="/">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                  <a className="dropdown-item" href="/">Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="dropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown 4
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown4">
                  <a className="dropdown-item" href="/">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                  <a className="dropdown-item" href="/">Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="dropdown5" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown 5
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown5">
                  <a className="dropdown-item" href="/">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                  <a className="dropdown-item" href="/">Something else here</a>
                </div> */}
              {/* </li> */}
            </ul>
          </div>
        </nav>

    </div>
  );

  // };
}

export default Navigation;