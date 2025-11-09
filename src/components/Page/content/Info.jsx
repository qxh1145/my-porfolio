import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiLink } from "react-icons/fi";

const Info = () => {
    return (
        <Row>
            <Row >
                <Col md={5}>
                </Col>
                <Col md={7}><Card style={{ background: "transparent", width: "18rem", border: "none"}}>
                    <Card.Body>
                        <Card.Text as="div">
                            <a className="themed-text" style={{ fontWeight: "bold", textDecoration: 'none' }} href='https://www.facebook.com/quandeptraibodoiquadi/'>Facebook<FiLink /></a>
                        </Card.Text>
                        <Card.Text as="div">
                            <a className="themed-text" style={{ fontWeight: "bold", textDecoration: 'none' }} href='https://www.linkedin.com/in/trnqun05/'>Linkedin<FiLink /></a>
                        </Card.Text>
                        <Card.Text as="div">
                            <a className="themed-text" style={{ fontWeight: "bold", textDecoration: 'none' }} href='https://github.com/qxh1145'>Github<FiLink /></a>
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
            </Row>


            <Row style={{}}>
                <Col md={9}></Col>
                <Col md={3}>
                    <Card style={{ background: "transparent", width: "18rem", border: "none" }}>
                        <Card.Body>
                            <Card.Text className="themed-text" style={{ fontWeight: "bold" }}>
                                Honorable student of SU25 semester 
                            </Card.Text>
                            <Card.Text className="themed-text" style={{ fontWeight: "bold" }}>
                                Honorable student of SP25 semester 
                            </Card.Text>
                            <Card.Text className="themed-text" style={{ fontWeight: "bold" }}>
                                Honorable student of FA25 semester 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>


            <Row style={{}}>
                <Col></Col>
                <Col>
                    <Card style={{ background: "transparent", width: "18rem", border: "none", marginTop: '3vh' }}>
                        <Card.Body>
                            <Card.Text className="themed-text" style={{ fontWeight: "bold" }}>
                                Codemosaic 4th prize
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Row>
    )
}

export default Info