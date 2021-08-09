import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Title from '../Title'
import Text from '../Text'
import AboutImage from './AboutImage'
import AboutText from './About-Text'
function About() {
    return (
        <Container className="about">
            <Container style={{marginBottom:'30px'}}>
                <Title title="About" />
                <Text />
            </Container>
            <Container>
            <Row>
                <Col lg={6}>
                    <AboutImage />
                </Col>
                <Col lg={6}>
                    <AboutText />
                </Col>
            </Row>
            </Container>
        </Container>
    )
}

export default About
