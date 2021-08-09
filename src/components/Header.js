import React from 'react'
import {NavLink} from 'react-router-dom'
import { Navbar, Nav, Container} from 'react-bootstrap'
import {AiOutlineTrophy} from 'react-icons/ai'
export default function Header() {
    return (
        <div>
            <Navbar expand="lg" collapseOnSelect className="main-navbar">
                <Container className="container-heading">
                    <Navbar.Brand className="nav-brand"><AiOutlineTrophy className="trophy"/>BizTech</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end nav-items">
                    <Nav>
                        <NavLink exact  to="/">Home</NavLink> 
                        <NavLink exact  to="/about"  id="about">About Us</NavLink> 
                        <NavLink exact  to="/services" id="services">Service</NavLink> 
                        <NavLink exact  to="/portfolio" id="portfolio">Portfolio</NavLink> 
                        <NavLink exact  to="/contact" id="contact">Contact</NavLink> 
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
