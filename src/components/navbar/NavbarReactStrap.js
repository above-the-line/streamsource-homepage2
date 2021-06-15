import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import * as style from "./NavbarReactStrapGatsby.module.css"

const styles= {
    navBarText: {
        textColor: "white",
        textShadow: "1px 1px 1px #000000"
    },
    navBarButton: {
        outlineStyle:"auto",
        outlineColor:"#cc6633"
    }
  }


  
const AppNavBarComponent = (props) => {
const [collapsed, setCollapsed] = useState(true);

const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        
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
            <Nav navbar className="">
                <NavItem>
                    <Link to="#features" className="nav-link" className={style.gatsbyNavLink}>Services</Link>
                    {/* <NavLink href="/" className={style.gatsbyNavLink}>Services</NavLink> */}
                </NavItem>
                <NavItem>
                    <Link to="#equipment" className="nav-link" className={style.gatsbyNavLink}>Equipment Hire</Link>
                    {/* <NavLink href="/" className={style.gatsbyNavLink}>Equipment Hire</NavLink> */}
                </NavItem>
                <NavItem>
                    <Link to="#equipment" className="nav-link" className={style.gatsbyNavLink}>Contact</Link>
                    {/* <NavLink href="/" className={style.gatsbyNavLink}>Equipment Hire</NavLink> */}
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        
    );
}
  
   
export default AppNavBarComponent;