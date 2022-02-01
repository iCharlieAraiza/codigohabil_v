import React from 'react'
import styled from 'styled-components'

const BannerCategory = ({props}) => {
    const title = props.title == undefined ? 'Work' : props.title;
    const logo = props.logo
    return (
        <BannerSection>
            <Container className="container-narrow">
                <TitleHeader>
                    <ImgContainer>
                        {
                            logo != undefined ? (
                                <img src={logo} />
                            ) : ''
                        }
                    </ImgContainer>
                    <Title>
                        { title }
                    </Title>
                </TitleHeader>
                <Description>
                    Artículos, tutoriales y cursos sobre { title }. De nivel básico a avanzado.
                </Description>
            </Container>
        </BannerSection>
    )
}

const BannerSection = styled.section`
    background: rgb(0,0,0);
    background: linear-gradient(180deg,rgba(207,207,227,0.4) 0%,rgb(185 185 185 / 15%) 40%);    
    margin-top: 2.5rem;
    min-height: 5rem;
    color: #535353;
`
const Container = styled.div`
    padding-bottom: 2rem;
    padding: 2rem 1rem;
`

const TitleHeader = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 6px 0;
`
const ImgContainer = styled.div`
    height: 40px;
    margin-right: 1rem;
    overflow: hidden;
    img{
        height: 40px
    }
`

const Title = styled.h1`
    margin: 0;
    font-size: 1.8rem;
    color: #343434;
`

const Description = styled.div`
    color: #a1a1a1;;
`

export default BannerCategory
