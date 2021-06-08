import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as style from "./Services.module.css"


const Services = () => {



    return (
        <div className={style.servicesBody}>
            <div className="container text-center">
                <div className="row pt-3 translate-middle">
                    <div className="col-lg-4 translate-middle">
                        <StaticImage
                            src="./../../images/QTakeMonitor2.png"
                            width={500}
                            quality={100}
                            formats={["AUTO"]}
                            alt="QTAKE"
                        />
                        <h2>On Set VTR, Streaming and Communications</h2>
                        <p>Secure, low latency streaming to any device on set - you just need a web browser.</p>
                        <p><a className="btn btn-outline-warning" href="#">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4 translate-middle">
                        
                        <StaticImage
                            src="./../../images/CorporateStreaming.jpg"
                            width={500}
                            quality={100}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="Corporate Streaming"
                        />
                        <h2>Corporate and Events Live Streaming</h2>
                        <p>Encrypted streams to protected custom websites, viewer analytics and interactivity.</p>
                        <p><a className="btn btn-outline-warning" href="#">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4 translate-middle">
                        <StaticImage
                            src="./../../images/webActivations.png"
                            width={500}
                            quality={100}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="Web Activations"
                        />

                        <h2>Point2Point, Peer2Peer, Cloud and LAN</h2>
                        <p>Bespoke web apps and video players for those who need peak security and throughput.</p>
                        <p><a className="btn btn-outline-warning" href="#">View details &raquo;</a></p>
                    </div> 
                </div> 

            </div>
        </div>
    )

}

export default Services
