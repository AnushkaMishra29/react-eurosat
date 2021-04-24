import React,{useState} from 'react';
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import { SliderData } from './data/SliderData';
import GlobalStyle from "./globalStyles";
import Dropdown from "./components/Dropdown";



function App() {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Hero slides={SliderData}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
    </>
  );
}

export default App;
