import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from "./../../images/backgrounds/greenScreen.jpg"
import image2 from "./../../images/backgrounds/rigFront.jpg"
import image3 from "./../../images/backgrounds/PublishersWeekly2015.jpg"
import image4 from "./../../images/backgrounds/codeSmall.jpg"
import image5 from "./../../images/backgrounds/horten.jpg"

  
const styles = {
  carouselImage: {
    width: "100vw",
    height: "100vh",
    objectPosition: "50% top",
    objectFit: "cover",
  },
  carouselMessageShadowBox: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "10px"
  },
  carouselText:{
    textShadow: "2px 2px 5px #000000"
  },
  carouselTextShadow:{
    textShadow: "3px 3px 3px #000000"
  }
}

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={styles.carouselImage}
          src={image}
          alt="First slide"
        />
        <Carousel.Caption style={styles.carouselTextShadow}>
          <h3>Stream Source delivers sub second latency on location or in the cloud</h3>
          <p>Any device, Any OS, no apps required</p>
          <p><a className="btn btn-lg btn-outline-warning" href="#">Learn more &raquo;</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          style={styles.carouselImage}
          src={image2}
          alt="First slide"
        />

        <Carousel.Caption style={styles.carouselTextShadow}>
          <h3>Stream Source delivers low cost, encrypted, streaming and replay options</h3>
          <p>Audio and or video streamed to custom websites or social platforms of your choice.</p>
          <p><a className="btn btn-lg btn-outline-warning" href="#">Learn more &raquo;</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          style={styles.carouselImage}
          src={image3}
          alt="First slide"
        />

        <Carousel.Caption style={styles.carouselTextShadow}>
          <h3>Stream Source delivers corporate live streaming and web production services</h3>
          <p>Cloud, infrastructure, mobile apps </p>
          <p><a className="btn btn-lg btn-outline-warning" href="#">Learn more &raquo;</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          style={styles.carouselImage}
          src={image4}
          alt="First slide"
        />

        <Carousel.Caption style={styles.carouselTextShadow}>
          <h3>Stream Source delivers custom players and bespoke web solutions</h3>
          <p>We are certified delivers computing architects who code.</p>
          <p><a className="btn btn-lg btn-outline-warning" href="#">Learn more &raquo;</a></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider;