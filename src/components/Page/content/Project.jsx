import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router';

const Project = () => {
    const navigate = useNavigate()

    const redirect = (link) => {
        window.open(link, "_blank");
        console.log(window);

    }

    return (
        <Row className='mt-5'>
            <Col ></Col>
            <Card style={{ background: "transparent", width: "28rem", marginTop: "14vh", border: "none" }}>
                <Card.Body>
                    <Card.Title><h1 className="themed-text" onClick={() => redirect("https://github.com/chipkiet/FitnexusApp")}>Fitnexus App</h1></Card.Title>
                    <Card.Text className="themed-text">
                        FrontEnd Dev and nutrition analysis A.I model trainer
                    </Card.Text>
                    <div className='border'></div>
                    {/* <Card.Title><h1 onClick={() => redirect("https://github.com/chipkiet/FitnexusApp")}>Fitnexus App</h1></Card.Title>
                    <Card.Text>
                        FrontEnd Dev and nutrition analysis A.I model trainer
                    </Card.Text> */}
                </Card.Body>
            </Card>
        </Row>
    )
}

export default Project