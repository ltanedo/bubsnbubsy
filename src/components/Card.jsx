import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'

import Container from 'react-bootstrap/Container';

export default function (props) {

    return(
        <Col xs={12} md={4}>
        <Container className="p-3">
        <Card>
        <Card.Img variant="top" src={props.uri}/>       
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.text}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        </Card>
        </Container>
        </Col>
    )
}