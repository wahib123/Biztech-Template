import React from 'react'
import Text from './Text'
import { Container } from 'react-bootstrap'
import Title from './Title'
import ClientsIconCarousel from './ClientIconCarousel'
function Clients() {
    return (
        <>
        <Container className="clients">
            <Title title="clients"/>
            <Text />
            <Container>
            <ClientsIconCarousel />
        </Container>
        </Container>
        </>
    )
}

export default Clients
