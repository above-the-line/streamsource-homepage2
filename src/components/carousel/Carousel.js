import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from "./../../images/backgrounds/greenScreen.jpg"
import image2 from "./../../images/backgrounds/rigFans.jpg"
import image3 from "./../../images/backgrounds/rigFront.jpg"
import image4 from "./../../images/backgrounds/horten.jpg"

  
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
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          style={styles.carouselImage}
          src={image2}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          style={styles.carouselImage}
          src={image3}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          style={styles.carouselImage}
          src={image4}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider;