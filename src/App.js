// import logo from './logo.svg';
import Navigation from './component/navbar';
import Carousel_custom from './component/carousel';
import Header from './component/header';
import Photo from './component/photo';
import './App.css';
import Team from './component/Team';
import About from './component/about';


// import { Container, Row, Col } from 'react-bootstrap';


function App() {

  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Photo/> 
      <Team/>
      <About/>



  </div>
  
  );
}
export default App;
