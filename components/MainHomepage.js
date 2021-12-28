import React from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi';


const MainHomepage = () => {
    return (
        <Main>
            <Container className='container'>
                <HeroSearch>
                    <TitleHero>¿Qué temas te interesa aprender?</TitleHero>
                    <SearchContainer>
                        <BiSearch />
                        <Search placeholder="Start your search" />
                    </SearchContainer>
                </HeroSearch>
                <Grid>
                    <Card>
                        <ImgContainer>
                            <img src="https://hackr.io/tutorials/java/logo-java.svg" alt="cursos-programacion" />
                        </ImgContainer>
                        <CardTitle>Java</CardTitle>
                    </Card>
                    <Card>
                        <ImgContainer>
                            <img src="https://hackr.io/tutorials/data-structures-algorithms/logo-data-structures-algorithms.svg" alt="cursos-programacion" />
                        </ImgContainer>
                        <CardTitle>Estructuras de datos</CardTitle>
                    </Card>
                    <Card>
                        <ImgContainer>
                            <img src="https://hackr.io/tutorials/php/logo-php.svg" alt="cursos-programacion" />
                        </ImgContainer>
                        <CardTitle>PHP</CardTitle>
                    </Card>
                    <Card>
                        <ImgContainer>
                            <img src="https://hackr.io/tutorials/javascript/logo-javascript.svg" alt="cursos-programacion" />
                        </ImgContainer>
                        <CardTitle>JavaScript</CardTitle>
                    </Card>
                    <Card>
                        <ImgContainer>
                            <img src="https://hackr.io/tutorials/react/logo-react.svg" alt="cursos-programacion" />
                        </ImgContainer>
                        <CardTitle>React</CardTitle>
                    </Card>
                    <Card>
                        <ImgContainer>
                            <img src="https://hackr.io/tutorials/c/logo-c.svg" alt="cursos-programacion" />
                        </ImgContainer>
                        <CardTitle>C</CardTitle>
                    </Card>
                    <Card/>
                    <Card/>
                </Grid>
            </Container>
        </Main>
    )
}


const Main = styled.main`

`

const Container = styled.div`
    padding: 2rem 1rem ;
    padding-top: 0;
`

const HeroSearch = styled.div`
`
const TitleHero = styled.h2`
    text-align: center;
`

const SearchContainer = styled.div`
    display: flex;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    max-width: 720px;
    margin: 0 auto;
`
const Search = styled.input`
    border: none;
    width: 100%;
    margin-left: 10px;
    &:focus {
        outline: none; 
    }
`

const Grid = styled.div`
    max-width: 1100px;;
    margin: 3rem auto;
    display: grid;
    gap: 2rem;
    grid-auto-rows: 8rem;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
`

const Card = styled.div`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    grid-column: span 1;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #fff;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        color: #ffffff;
    }
`

const ImgContainer = styled.div`
        height: 60px;
        width: 100%;
        overflow: hidden;
        margin:0;
    img{
        display: block;
        width: 50px;
        height: 50px;
        margin: 0 auto;
    }
`

const CardTitle = styled.h3`
    text-align: center;
    font-size: 14px;
    color: #707070;
    margin-top:10px;
`


export default MainHomepage
