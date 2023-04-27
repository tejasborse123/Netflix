import React, { useState } from 'react';
import Home from "../src/Home.jsx";
import Card from "../src/Card.jsx";
import Faqs from "../src/FAQ.jsx";
import Foot from "../src/Footer.jsx";
import './App.css';

function App(props) {

  const [selectedValue, setSelectedValue] = useState('');
  
  const handleChange = (event) => {
      setSelectedValue(event.target.value);
  }

  return (
   <>
      <Home />
      <Card />
      <Faqs />
      <Foot />
   </>
  );
}

export default App;
