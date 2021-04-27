import React from 'react';
import './Predict.css';
import {Button} from "../components/Button";
const Predict =() => {
    return(
        <div className="predict"
        >
            <Button style ={{color:'yellow',paddingTop:'0.5%',paddingLeft:'50%',fontStyle:'Montserrat',

            }} className="Heading"> <h1>PREDICT YOUR IMAGE</h1></Button>
        </div>
    );
};
export default Predict;