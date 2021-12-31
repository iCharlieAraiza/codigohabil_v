import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <BannerSection>
            <Container>
                <TitleSection>
                    Aprende a programar, diseñar y desarrollar 
                    <Typewriter
                        options={{
                            strings: ['Apps', 'Software', 'en JavaScript', 'en React', 'en Node.js', 'en Python', 'en C++', 'en Java', 'en PHP'],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            pauseFor: 2500,
                        }}
                        />
                </TitleSection>
                <DescripcionSection>
                    En este sitio encontrarás cursos de programación, diseño y desarrollo web y mucho más <OutstandingSpan>¡Gratis!</OutstandingSpan>
                </DescripcionSection>
            </Container>
        </BannerSection>
    )
}

const BannerSection = styled.section`
    background-image: url('https://assets.codigohabil.com/img/background-banner.svg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    display: flex;
    color: #fff;    

    @media (min-width:801px) { 
        height: 90vh;
    }
    `

const Container = styled.div`
    width: 100%;
    vertical-align: middle;
    height: fit-content;
    padding: 0 1rem;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 25%;
    
    .Typewriter{
        display: inline-block;
        margin-left: 10px;
        color: #f4f4c1;
    }

    @media (min-width:801px) { 
        width: 600px;
    }
    @media (min-width:1281px) {
        //margin: % auto;
    }

    `

const OutstandingSpan = styled.span`
    text-transform: capitalize;
    color: #939393;
    background-color: #f6f6f6;
    box-shadow: 10px 10px 0px 0px rgb(57 57 57);
    padding-left: 10px;
    padding-right: 10px;
    font-size: 20px;
`

const TitleSection = styled.div`
    font-size: 2rem;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: -2px;
    font-weight: 700;
    line-height: 45px;
    
    @media (min-width:600px) { 
        font-size: 2.5rem;
    }

    @media (min-width:801px) {
        font-size: 2.5rem;
    }
`
const DescripcionSection = styled.div`
    font-size: 1.3rem;
    text-align: center;
    margin-top: 1rem;
    font-weight: 200;
    @media (min-width:600px) { 
        font-size: 1.5rem;
    }
`

export default Banner
