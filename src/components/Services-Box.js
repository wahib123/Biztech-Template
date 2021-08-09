import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {BsBriefcase} from 'react-icons/bs'
import {DiReact} from 'react-icons/di'
function ServicesBox() {
    let boxes =[
    {id:0,icon:<BsBriefcase/>, heading:"Marketing"},
    {id:1,icon:<BsBriefcase/>, heading:"Consulting"},
    {id:2,icon:<BsBriefcase/>, heading:"Developement"},
    {id:3,icon:<DiReact id="react"/>, heading:"Financial"},
    {id:4,icon:<BsBriefcase/>, heading:"Consulting"},
    {id:5,icon:<BsBriefcase/>, heading:"Quality"},
]
    boxes = boxes.map((box) => {
        return(
            <Col lg={4} key={box.id}>
            <div className="services-box">
                <div className="services-box-icon">
                    {box.icon}
                </div>
                <h4>{box.heading}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla.</p>
            </div>
        </Col>
        )
    }) 
    return (
    <Row>
        {boxes}
    </Row>
    )
}

export default ServicesBox
