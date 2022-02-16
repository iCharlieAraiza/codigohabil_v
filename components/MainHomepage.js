import React, {useState} from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi';
import Link from 'next/link';
//import Image from 'next/image';

const MainHomepage = ({categories, theme}) => { 
    //console.log("categories", categories[0].node.parent.node.categoryInfo.logo)
    const categoriesData = categories.map((el) => {
        return el.node.parent.node
    })

    categoriesData.sort((a, b) => {
        if(a.count > b.count) return -1;
        if(a.count < b.count) return 1;
        return 0;
    })
    
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <Main>
            <Container className='container'>
                <HeroSearch>
                    <TitleHero>¿Qué temas te interesa aprender?</TitleHero>
                    <SearchContainer>
                        <BiSearch />
                        <Search placeholder="Start your search" onChange={target => handleChange(target)}/>
                    </SearchContainer>
                </HeroSearch>
                <Grid>
                    {
                        categoriesData.filter(
                            (el) => {
                                return el.name.toLowerCase().includes(search.toLowerCase())
                            }   
                        ).map((el) => {
                            return (
                                <Link href={`/paths/${el.slug}`} key={el.id}>
                                    <Card>
                                        { el.categoryInfo.logo != null ? (
                                            <ImgContainer>
                                                <img src={el.categoryInfo.logo} alt={`cursos de ${el.name}`} width="50" height="50"/>
                                            </ImgContainer> ) : '' }
                                        <CardTitle>{ el.name }</CardTitle>
                                    </Card>
                                </Link>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Main>
    )
}


const Main = styled.main`
    min-height: 50vh;
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

const Card = styled.a`
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
