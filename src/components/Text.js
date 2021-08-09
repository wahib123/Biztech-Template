import React from 'react'
import { Container } from 'react-bootstrap'

function Text({id,text}) {
    return (
        <Container>
            <p className="text" id={id}>
            {!text ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore" : text}
            </p>
        </Container>
    )
}
export default Text
