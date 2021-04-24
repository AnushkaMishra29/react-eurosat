import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import './About.css';
class About extends React.Component {
    state = {
        para: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs Lorem ipsum, ipsum as it is sometime  print, graphic or web designs",
        Images: [
            "../images/pic-1.jpg",
            "../images/pic-2.jpg",
            "../images/pic-3.jpg"
        ]


    }
    render() {
        return (
            <div className = "wedo">
                <div className="web">
                    <div className = "letter" ></div>
                    <div className="row" >
                        <div className = "col-md-8 col-sm-12 font2" >
                            <div className="heading">WHAT WE DO</div>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs Lorem ipsum,
                            ipsum as it is sometime print, graphic or web designs
                        </div>
                        <div className = "col-md-4 col-sm-12" >
                            <Carousel  controls={false} indicators={false} interval={5000}>
                                {
                                    this.state.Images.map((image)=>
                                    {
                                        return( <Carousel.Item>
                                                <img

                                                    src={image}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                        )
                                    })
                                }

                            </Carousel>

                        </div>
                    </div>
                </div>
                <div className="mobile">
                    <div className="heading">WHAT WE DO</div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel  controls={false} indicators={false} interval={1000}>
                                {
                                    this.state.Images.map((image)=>
                                    {
                                        return( <Carousel.Item>
                                                <img

                                                    src={image}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                        )
                                    })
                                }

                            </Carousel>

                        </div>
                        <div className="col-12 font2">
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs Lorem ipsum,
                            ipsum as it is sometime print, graphic or web designs
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default About;