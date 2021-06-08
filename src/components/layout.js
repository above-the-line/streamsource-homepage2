import * as React from "react"
import AppNavBarComponent from "./navbar/NavbarReactStrap"
 
const Layout = ({ children }) => {
  
 
    return (
        <>
            <AppNavBarComponent />
            <main>{children}</main>
            
            
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://www.streamsource.com.au">StreamSource</a>
            
        </>
    )
}

export default Layout
 