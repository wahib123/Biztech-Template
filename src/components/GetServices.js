import React from 'react'
import Text from './Text'
import {Container, Row, Col, Button} from 'react-bootstrap'
function GetServices() {
    return (
        <Container className="get-services">
            <Row>
                <Col lg={9}>
                    <h3> Get Our Service</h3>
                    <Text id="getservices-text" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                </Col>
                <Col className="button-container">
                    <Button variant="outline-primary" className="getservices-button">Contact Us</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default GetServices
