import React from "react";
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Image1 from "../images/Pulling bubs face GIF.gif"
import Image2 from "../images/Can I have one bite GIF.gif"
import Image3 from "../images/Subway GIF.gif"
import Image4 from "../images/Taking so long GIF.gif"
import Image5 from "../images/When he buys me flowers GIF.gif"
import Image6 from "../images/Camera GIF.gif"
import Image7 from "../images/Chocking GIF.gif"
import Image8 from "../images/Are you still mad GIF.gif"

function Photo(props) {
  const photos = [ Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8
 // Add more images with appropriate paths and alt text
  ];
  return (  
    <Container>
      <Row xs={2} md={2} lg={3} xl={4} className="g-4">
        {photos.map((photo, index) => (
          <Col key={index}>
            <img src={photo} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Photo;