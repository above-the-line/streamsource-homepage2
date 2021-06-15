import React from "react";
import * as style from "./Features.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from 'reactstrap';



const Features = () => {

    return (
        <>
        <a id="features"></a>
        <Container className={style.featuretteBody}>
            
            {/* <div className={style.featuretteDivider}></div> */}
            
            <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading">Audio and video from anywhere <span className="text-muted">to anywhere</span></h2>
                <p className="lead">Director, camera operator, client and agency, all talking on one channel, or watching the same feed, no matter where they are in the world.</p>
            </div>
            <div className="col-md-5">
                <StaticImage
                    src="./../../images/networkDiagram.jpg"
                    width={500}
                    quality={100}
                    formats={["AUTO"]}
                    alt="QTAKE"
                />
            </div>
            </div>

            <div className="row featurette">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">Analyse, protect and bill <span className="text-muted">your viewers</span></h2>
                <p className="lead">Get a secure custom branded page with viewer analytics, restricted access and pay walls built in.</p>
            </div>
            <div className="col-md-5 order-md-1">
                <StaticImage
                    src="./../../images/corporateAnalytics.jpg"
                    width={500}
                    quality={100}
                    formats={["AUTO"]}
                    alt="Video Analytics"
                />
            </div>
            </div>
        

            <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading">Third party platforms <span className="text-muted">or bespoke solutions</span></h2>
                <p className="lead">We understand web and video technologies. Consulting services are available.</p>
            </div>
            <div className="col-md-5">
                <StaticImage
                    src="./../../images/bespoke.jpg"
                    width={500}
                    quality={100}
                    formats={["AUTO"]}
                    alt="Bespoke"
                />
            </div>
            </div>        
        </Container>
        </>
    )
}

export default Features;