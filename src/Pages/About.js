import React from 'react';
import './About.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
class About extends React.Component {
    componentDidMount()
    {

        Aos.init({

            offset: 40,
            duration: 500,
            easing: 'ease-in-sine',
        });
    }
    render(){
        return (
            <div className="About">
                <div className="cover row"><div className="col-sm-6 cover2"></div><div className="col-sm-6 cover2"></div></div>
                <div data-aos="fade-up" className="heading"><div className="content">About </div></div>
                <div data-aos="fade-up" className="para">
                    This a website used to predict the images that you insert in the predict section in the navbar.
                    Basically a CNN based prediction system predicts the eurosat images.This CNN based multiclass image
                    classification of the tensorflow eurosat dataset. The dataset consists of 10 classes namely Annual
                    Crop,Forest, Herbaceous Vegetation, Highway, Industrial, Pasture ,Permanent Crop ,Residential, River
                    and SeaLake.
                </div>

            </div>
        )
    }
}
export default About