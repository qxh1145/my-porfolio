import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Skill = () => {
    return (
        <Row>
            <Col md={7}></Col>
            <Col md={5}><Card style={{ background: "transparent", width: "100%", marginTop: "14vh", border: "none" }}>
                <Card.Body>
                    <Card.Text as="div" className="themed-text">
                        <div >
                            <h3>Programming Language & Framework</h3>
                            <ul>
                                <li>Java, javascript, Swift</li>
                                <li>React, NodeJS, ReactNative</li>
                                <li>Tailwind-CSS, CSS-in-JS</li>
                            </ul>
                            <h3>What Language I speak ?</h3>
                            <ul>
                                <li>Japanese</li>
                                <li>English</li>
                                <li>Vietnamese</li>
                            </ul>
                            <h3>Tool I use</h3>
                            <ul>
                                <li>Docker</li>
                                <li>Git, Github</li>
                                <li>VSCode, Intelliji, XCode,Notion, Jira, Postmam, pgAdmin4</li>
                            </ul>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card></Col>
        </Row>
    );
}
export default Skill