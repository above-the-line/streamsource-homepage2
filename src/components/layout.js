import * as React from "react"
import AppNavBarComponent from "./navbar/Navbar"
 
const Layout = ({ children }) => {
  
 
    return (
    // <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
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
 