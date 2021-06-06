import * as React from "react"
import Slider from "../components/carousel/Carousel"
import Services from "../components/services/Services"
import Layout from "../components/layout"
import Features from "../components/features/Features"
import './App.scss';

const IndexPage = () => (
  <Layout>
    <Slider />
    <Services />
    <Features />
  </Layout>
)

export default IndexPage
