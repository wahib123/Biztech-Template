import React from 'react'
import AboutImage from './About/AboutImage'
import AboutText from './About/About-Text'
import { Container, Row, Col } from 'react-bootstrap'
import BannerHeading from './Banner-Heading'
import Clients from './Clients'
import GetServices from './GetServices'
import Testimonials from './Testimonials'
import Team from './About/Team'
import Title from './Title'

function AboutUsPage() {
    window.scrollTo({top:0, behavior:"smooth"})
    return (
        <React.Fragment>
            <BannerHeading heading="About Us"/>
        <Container style={{padding:"60px 0px"}}>
            <Row>
                <Col lg={6}>
                <AboutImage />
                </Col>
                <Col>
                <AboutText />
                </Col>
            </Row>
        </Container>
        <Clients />
        <GetServices />
        <Container style={{padding: "60px 0px"}}>
        <Title title="our team"/>
        <Team />
        </Container>
        <Testimonials />
        </React.Fragment>
    )
}

export default AboutUsPage
