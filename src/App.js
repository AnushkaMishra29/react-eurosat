import React from 'react';
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import { SliderData } from './data/SliderData';
import GlobalStyle from "./globalStyles";
import Dropdown from "./components/Dropdown";



function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <Hero slides={SliderData}/>
        <Dropdown/>
    </>
  );
}

export default App;
