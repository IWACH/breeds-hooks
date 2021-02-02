import React from "react";
//import { Link } from "react-router-dom";

import { Layout, Menu } from "antd";

const { Header } = Layout;

function NavBar() {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="2">SISMANT</Menu.Item>
        <Menu.Item key="3">nav 2</Menu.Item>
        <Menu.Item key="4">nav 3</Menu.Item>
      </Menu>
    </Header>
    //   <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    //     <div className="navbar-brand">
    //       <Link className="navbar-item" to="/">
    //         <img
    //           src="https://bulma.io/images/bulma-logo.png"
    //           width="112"
    //           height="28"
    //           alt=""
    //         />
    //       </Link>

    //       <a
    //         href="/"
    //         role="button"
    //         className="navbar-burger"
    //         aria-label="menu"
    //         aria-expanded="false"
    //         data-target="navbarBasicExample"
    //       >
    //         <span aria-hidden="true"></span>
    //         <span aria-hidden="true"></span>
    //         <span aria-hidden="true"></span>
    //       </a>
    //     </div>

    //     <div id="navbarBasicExample" className="navbar-menu">
    //       <div className="navbar-start">
    //         <a href="/" className="navbar-item">
    //           Home
    //         </a>

    //         <a href="/" className="navbar-item">
    //           Documentation
    //         </a>

    //         <div className="navbar-item has-dropdown is-hoverable">
    //           <a href="/" className="navbar-link">
    //             More
    //           </a>

    //           <div className="navbar-dropdown">
    //             <a href="/" className="navbar-item">
    //               About
    //             </a>
    //             <a href="/" className="navbar-item">
    //               Jobs
    //             </a>
    //             <a href="/" className="navbar-item">
    //               Contact
    //             </a>
    //             <hr className="navbar-divider" />
    //             <a href="/" className="navbar-item">
    //               Report an issue
    //             </a>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="navbar-end">
    //         <div className="navbar-item">
    //           <div className="buttons">
    //             <a href="/" className="button is-primary">
    //               <strong>Sign up</strong>
    //             </a>
    //             <a href="/" className="button is-light">
    //               Log in
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
  );
}

export default NavBar;
