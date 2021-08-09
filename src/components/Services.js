import React from 'react'
import {Container} from 'react-bootstrap'
import Title from './Title'
import Text from './Text'
import ServicesBox from './Services-Box'
function Services() {
    return (
        <Container className="services">
            <Title title="Services" />
            <Text id="services-text"/>
            <Container>
                <ServicesBox />
            </Container>
        </Container>
    )
}

export default Services
