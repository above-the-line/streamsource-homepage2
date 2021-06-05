import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const Services = () => {



    return (
        <div class="container vh-100">
            <div class="row">
                <div class="col-lg-4">
                    <StaticImage
                        src="../images/QTakeMonitor2.png"
                        width={500}
                        quality={100}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="QTAKE"
                    />
                    <h2>On Set VTR, Streaming and Communications</h2>
                    <p>Secure, low latency, HD streams to any device, enabling client, agency or director to stay connected wherever they are.</p>
                    <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                </div>
                <div class="col-lg-4">
                    
                    <StaticImage
                        src="../images/CorporateStreaming.jpg"
                        width={500}
                        quality={100}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Corporate Streaming"
                    />
                    <h2>Corporate and Events Streaming</h2>
                    <p>Encrypted streams to protected custom websites, viewer analytics and interactivity.</p>
                    <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                </div>
                <div class="col-lg-4">
                    <StaticImage
                        src="../images/webActivations.png"
                        width={500}
                        quality={100}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Web Activations"
                    />

                    <h2>Point-to-point, peer-to-peer, cloud and LAN</h2>
                    <p>Web activations, native web apps and video streaming.</p>
                    <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                </div> 
            </div> 

        </div>
    )

}

export default Services
