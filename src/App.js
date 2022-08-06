import React, { useState } from 'react';
import './App.css';

import Social from './components/Social';
import Carousel from './components/Carousel'
import Advertisement from './components/Advertisement';
import Team from './components/Team';
import Partners from './components/Partners';
import Footer from './components/Footer';


const App = () => (
  <>
      <Carousel/>        
      <Social/>        
      <Advertisement/>
      <Team/>
      <Partners/>
      <Footer/>
  </>
);

export default App;
