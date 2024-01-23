import React from "react";
import { Carousel} from 'react-bootstrap';


function Carousel_custom(props) {
  return (
    <div className="Carousel">
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placekitten.com/800/400"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placekitten.com/800/401"
            alt="Second slide"
          />
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

export default Carousel_custom;