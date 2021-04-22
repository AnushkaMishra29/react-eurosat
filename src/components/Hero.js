import React from 'react'
import { FaSlideshare } from 'react-icons/fa';
import styled,{ css } from 'styled-components/macro';
import { Button } from './Button';

const HeroSection=styled.section`
height: 100vh;
max-height:1100px;
position: relative;
overflow: hidden;
`;
const Herowrapper=styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;
`;

const HeroSlide=styled.div``
const HeroSlider=styled.div``
const HeroImage=styled.img``
const HeroContent=styled.div``


const Hero = ({slides}) => {
    return (
        <HeroSection>
            <Herowrapper>
                {slides.map((slide,index)=>{
                    return(
                        <HeroSlide key={index}>
                            <HeroSlider>
                                <HeroImage>
                                    <HeroContent>
                                        <h1>{slide.titile}</h1>
                                        <p>{slide.pics}</p>
                                        <Button to={slide.path} primary ="true">
                                            {slide.label}
                                        </Button>
                                    </HeroContent>
                                </HeroImage>
                            </HeroSlider>
                        </HeroSlide>
                    )
                })}
            </Herowrapper>
        </HeroSection>
    );
};

export default Hero;
