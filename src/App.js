import React,{useState} from 'react';
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import { SliderData } from './data/SliderData';
import GlobalStyle from "./globalStyles";
import Dropdown from "./components/Dropdown";
import About from "./Pages/About";
import Predict from "./Pages/Predict";
import Contact from "./Pages/Contact";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


function App() {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <Router>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
        <switch>
            <Route path ='/About'  exact component ={About}/>
            <Route path ='/Predict'  exact component ={Predict}/>
            <Route path ='/Contact'  exact component ={Contact}/>
        </switch>
      <Hero slides={SliderData}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
    </Router>
  );
}

export default App;
