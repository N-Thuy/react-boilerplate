/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
// eslint-disable-next-line prettier/prettier
// import {Router} from "react-router-dom";
// eslint-disable-next-line import/no-cycle
// import Contact from '../../containers/App/Contact';
export default function Header() {
  return (
    // <Router>
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href>
              React-boilerplate
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href>Home</a>
            </li>
            <li>
              <a href>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <Route exact path="/contact" component={Contact} /> */}
    </div>
    // </Router>
  );
}
