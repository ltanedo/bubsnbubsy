import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

function Carousel(props) {
  return (
    <Jumbotron bsClass={{
      'background-color' : "#CFD8DC"
    }}>
        <h1 className="text-center">{props.title}</h1>
        <p className="text-center">{props.text}</p>
        <p>
            {/* <Button bsStyle="primary">Learn more</Button> */}
        </p>
    </Jumbotron>
  );
}

export default Carousel;