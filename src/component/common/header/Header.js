import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { UserRole } from "../../UserRole";
import { useNavigate } from "react-router-dom";
import { FaHome, FaInfoCircle, FaHeart, FaBuilding, FaBloggerB, FaAddressBook, FaUser, FaSignOutAlt } from 'react-icons/fa';
import "./header.css";
import img from "../../images/logo.png";

const Header = () => {
  const role = UserRole();
  const navigate = useNavigate();

  const handleSignOut = () => {
    if (window.confirm("Are you sure you want to Sign Out")) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  const renderNavLink = (to, text, icon) => (
    <NavLink to={to} className="nav-item">
      {icon}
      <span>{text}</span>
    </NavLink>
  );

  return (
    <Navbar className="custom-navbar" bg="" variant="" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <img src={img} alt="Logo" className="logo-image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-between">
            {renderNavLink("/", "Home", <FaHome />)}
            {renderNavLink("/about-us", "About", <FaInfoCircle />)}
            {renderNavLink("/donate", "Donate", <FaHeart />)}
            {renderNavLink("/npo", "NPO", <FaBuilding />)}
            {renderNavLink("/blog", "Blog", <FaBloggerB />)}
            {renderNavLink("/contact", "Contact", <FaAddressBook />)}

            {role === "user" && renderNavLink("/profileView", "Profile", <FaUser />)}
            {role === "admin" && renderNavLink("/donators", "Donators", <FaUser />)}
{role && (
              <div onClick={handleSignOut} className="sign-out-link">
                <FaSignOutAlt /> Sign Out
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;