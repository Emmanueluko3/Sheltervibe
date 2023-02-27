import React, { useState } from "react";
import "../styles/navbar.css";
import Logo from "../assets/images/citadel.svg";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbarcomponent(props) {
  const [active, setActive] = useState(null);
  let { methods } = props;

  methods = {
    connectWalletAction() {},
    ...methods,
  };
  const links = [
    {
      to: "/",
      placeHolder: "Home",
    },
    {
      to: "/properties",
      placeHolder: "Properties",
    },
    {
      to: "/about",
      placeHolder: "About Us",
    },
    {
      to: "/blog",
      placeHolder: "Blog",
    },
    {
      to: "/contact",
      placeHolder: "Contact Us",
    },
  ];

  const handleClick = (index) => {
    setActive(index);
  };
  return (
    <div className="nav-parent">
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} className="custom-logo" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-white"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  className={
                    active === index ? "notActive active" : "notActive"
                  }
                  onClick={() => handleClick(index)}
                >
                  {link.placeHolder}
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <button
              onClick={() => {
                methods.connectWalletAction();
              }}
              className="btn btn-light cus-login fw-semibold"
            >
              Login/Sign up
            </button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarcomponent;
