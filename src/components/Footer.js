import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Container className="copyright">
                    © Copyright <strong>BizTech</strong>. All Rights Reserved
                </Container>
                <Container className="credits">
                    Template by <a href="https://webthemez.com/consulting/">WebThemez</a>
                </Container>
            </Container>
        </div>
    )
}

export default Footer
