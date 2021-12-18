import React from 'react'
import styled from 'styled-components'

const Banner = () => {
    return (
        <BannerSection>
            <Container>
                <TitleSection>
                    Aprende a programar, diseñar y desarrollar aplicaciones
                </TitleSection>
                <DescripcionSection>
                    En este sitio encontrarás cursos de programación, diseño y desarrollo web y mucho más
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
        height: 80vh;
    }
    `

const Container = styled.div`
    width: 100%;
    vertical-align: middle;
    height: fit-content;
    margin: 40% 0;
    padding: 0 1rem;

    @media (min-width:801px) { 
        width: 720px;
        margin: 15% auto;
    }
    `

const TitleSection = styled.div`
    font-size: 2rem;
    text-align: center;
    letter-spacing: 0.1rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    
    @media (min-width:600px) { 
        font-size: 2.5rem;
    }

    @media (min-width:801px) {
        font-size: 2.5rem;
    }
`
const DescripcionSection = styled.div`
    font-size: 1.5rem;
    text-align: center;
    margin-top: 1rem;
`

export default Banner
