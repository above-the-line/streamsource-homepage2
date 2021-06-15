import React from "react";
import * as style from "./Contact.module.css"
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container } from 'reactstrap';
import Button from 'react-bootstrap/Button'


const Features = () => {

    return (
        <div className={style.contactBody}>
            <a id="equipment"></a>
            <Container >
                <Jumbotron>
                    <h1>Questions or gear rentals?</h1>
                    <p>
                        We're buying equipment all the time, get in touch for an equipment list, or if you want us to bid on a job. 
                    </p>
                    <p>
                        <a href="tel:+61431594074"><Button className={style.contactButton} variant="primary">0431 594 074</Button></a>
                        <a href="mailto:play.right.productions@gmail.com"><Button className={style.contactButton} variant="primary">play.right.productions@gmail.com</Button></a>
                    </p>
                </Jumbotron>     
            </Container>
        </div>
    )
}

export default Features;