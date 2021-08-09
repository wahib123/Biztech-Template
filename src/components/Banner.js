import React from 'react'
import { Image, Container, Row, Col, Button } from 'react-bootstrap'
import women from '../css/img/women.png'
function Banner() {
    return (
        <div className="banner-container">
            <Container style={{marginLeft:'110px'}}>
                <Row>
                    <Col>
                        <h2 className="banner-text">Business Growth<br/><span> Consulting</span></h2>
                    </Col>
                    <Col lg={9}>
                    <Image src={women} className="banner"/>
                    </Col>
                </Row>
                <Button variant="outline-primary" className="banner-button">Our Service</Button>
            </Container>
        </div>
    )
}

export default Banner
