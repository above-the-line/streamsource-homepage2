import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import image from "./../../images/icon.png"



const styles= {
    navBarText: {
      textShadow: "1px 1px 1px #000000"
    }
  }


const AppNavBarComponent = () => {


    return (
        <>
        <Navbar collapseOnSelect bg-transparent sticky="top" expand="md">
            <Navbar.Brand href="#">
            <img
                alt=""
                src={image}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            React Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"> 
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )

}

export default AppNavBarComponent;