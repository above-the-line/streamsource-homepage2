import * as React from "react"
import Slider from "../components/carousel/Carousel"
import Services from "../components/services/Services"
import Layout from "../components/layout"
import Features from "../components/features/Features"
import Contact from "../components/contact/Contact"
// import AppNavBarComponent from "../components/navbar/NavbarReactStrap"
import './App.scss';

const IndexPage = () => (
  <Layout>
    <Slider />
    <Services />
    <Features />
    <Contact />
  </Layout>
)

export default IndexPage
