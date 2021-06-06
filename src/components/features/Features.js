import React from "react";
import * as style from "./Features.module.css"
import { StaticImage } from "gatsby-plugin-image"


const Features = () => {

    return (
        <div className="container">
            
            <div className={style.featuretteDivider}></div>

            <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5">
                <StaticImage
                    src="./../../images/network-diagram.jpg"
                    width={500}
                    quality={100}
                    formats={["AUTO"]}
                    alt="QTAKE"
                />
            </div>
            </div>

            <div className="row featurette">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
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
                <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
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
        </div>

    )
}

export default Features;