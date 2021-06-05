import image from "./../../images/icon.png"
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const styles= {
    navBarText: {
      textShadow: "1px 1px 1px #000000"
    }
  }


  
const AppNavBarComponent = (props) => {
const [collapsed, setCollapsed] = useState(true);

const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
        <Navbar className="fixed-top bg-transparent" light>
            <NavbarBrand href="/" className="mr-auto">
                <StaticImage
                    src="./../../images/StreamSourceLogoHalo.png"
                    width={250}
                    quality={100}
                    formats={["AUTO"]}
                    alt="StreamSource Logo"
                />
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
                <NavItem>
                <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    );
}
  
   
export default AppNavBarComponent;