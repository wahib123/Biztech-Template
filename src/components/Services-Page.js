import React from 'react'
import BannerHeading from './Banner-Heading'
import ServicesBox from './Services-Box'
import { Container, Row, Col } from 'react-bootstrap'
import Clients from './Clients'
import GetServices from './GetServices'
import AboutImage from './About/AboutImage'
import AboutText from './About/About-Text'
import img from '../css/img/about-img.png'
function ServicesPage() {
    window.scrollTo({top:0, behavior:"smooth"})
    return (
        <>
        <BannerHeading heading="Services"/>
        <Container className="services-page-container">
        <ServicesBox />
        </Container >
        <Container>
            <Clients />
        </Container>
        <Container style={{padding:"60px 0px"}}>
            <Row>
                <Col lg={6}>
                    <AboutImage img={img}/>
                </Col>
                <Col lg={6}>
                    <AboutText />
                </Col>
            </Row>
        </Container>
        <Container>
            <GetServices/>
        </Container>
        </>
    )
}

export default ServicesPage
