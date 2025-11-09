import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Home = () => {
    return (
        <Row className='mt-5'>
            <Col ></Col>
            <Card style={{ background: "transparent", width: "18rem", marginTop: "14vh", border: "none"}}>
                <Card.Body>
                    <Card.Text className="themed-text">
                        Born in 2005 in Hue, Vietnam. 
                        I am a Software Engineering student,
                        passionate about technology and design.
                        I strive to create useful and inspiring digital products,
                         while learning and growing through new ideas and experiments.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default Home