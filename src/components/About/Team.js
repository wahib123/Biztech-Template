import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { FaTwitter, FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa'
import team1 from '../../css/img/team1.jpg'
import team2 from '../../css/img/team2.jpg'
import team3 from '../../css/img/team3.jpg'
import team4 from '../../css/img/team4.jpg'
function Team() {
    const team = [{ id: 1, pic: team1, name: "James Smith", posi: "Chief Executive Officer" },
    { id: 2, pic: team2, name: "Michell Kellon", posi: "Technical Manager" },
    { id: 3, pic: team3, name: "French Lincon", posi: " Financial Manager" },
    { id: 4, pic: team4, name: "Amanda Jepson", posi: "Accountant" }].map((team) => {
        return (<Col lg={3} key={team.id}>
            <div className="member">
                <Image src={team.pic} />
            </div>
            <div className="details">
                <h4>{team.name}</h4>
                <span>{team.posi}</span>
            </div>
            <div className="social">
                <FaTwitter className="social-icons" />
                <FaFacebookF className="social-icons" />
                <FaGooglePlusG className="social-icons" />
                <FaLinkedinIn className="social-icons" />
            </div>
        </Col>)
    })
    return (
        <Container className="team">
            <Row>
                {team}
            </Row>
        </Container>
    )
}

export default Team
