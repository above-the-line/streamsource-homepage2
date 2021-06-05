import * as React from "react"
import Slider from "../components/carousel/Carousel"
import Services from "../components/services/Services"
import Layout from "../components/layout"
import AppNavBarComponent from "./../components/navbar/Navbar"
import './App.scss';

const IndexPage = () => (
  <Layout>
    <Slider />
    {/* <AppNavBarComponent /> */}
    <Services />
  </Layout>
)

export default IndexPage
