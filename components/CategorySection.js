import React from 'react'
import styled from 'styled-components'
import Breadcrump from './Breadcrump'
import { BiSearch, BiCalendar } from 'react-icons/bi';

const CategorySection = () => {

    const postsData = [ 
        {   id: 1,  title: 'Fundamentos de java' },
        {   id: 2,  title: 'Fundamentos de java con dibujos' },
        {   id: 3,  title: 'Curso de actulización' },
        {   id: 4,  title: 'Fundamentos de java con dibujos' },
        {   id: 5,  title: 'Fundamentos de PHP con diagramas de flujo' },
    ]

    return (
        <Section>
            <Container className="container">
                <Breadcrump />
                <CategoryTagContainer>
                    <h2>Contenido</h2>
                    <CaregoryTagList>
                        <TagItem>
                            <ImgBlock>
                                <img src="https://assets.codigohabil.com/img/book.svg" />
                            </ImgBlock>
                            <TagTitle>
                                Fundamentos de JavaScript
                            </TagTitle>
                        </TagItem>

                        <TagItem>
                            <ImgBlock>
                                <img src="https://assets.codigohabil.com/img/book.svg" />
                            </ImgBlock>
                            <TagTitle>
                                Java y MySQL
                            </TagTitle>
                        </TagItem>

                        <TagItem>
                            <ImgBlock>
                                <img src="https://assets.codigohabil.com/img/gear.svg" />
                            </ImgBlock>
                            <TagTitle>
                                Programación Orientada a Objetos
                            </TagTitle>
                        </TagItem>

                        <TagItem>
                            <ImgBlock>
                                <img src="https://assets.codigohabil.com/img/pencil.svg" />
                            </ImgBlock>
                            <TagTitle>
                                Tutoriales y cursos
                            </TagTitle>
                        </TagItem>
                    </CaregoryTagList>
                </CategoryTagContainer>
    
                <PostSection>
                    <SearchContainer>
                        <BiSearch />
                        <Search placeholder="Busca por el tema" />  
                    </SearchContainer>

                    <PostList>

                        {postsData.map(post => (
                            <PostItem key={post.id}>
                                <PostDescription>
                                    <ImgBlock>
                                        <img src="https://assets.codigohabil.com/img/document.svg" alt="cursos-programacion"/>
                                    </ImgBlock>
                                    <PostTitle>
                                        {post.title}
                                    </PostTitle>
                                </PostDescription>
                                <PostInfo>
                                    <PostDate>
                                        <BiCalendar />
                                        12 Nov 2021
                                    </PostDate>
                                </PostInfo>
                            </PostItem>    
                        ))}                    
                    </PostList>
                </PostSection>

            </Container>
        </Section>
    )
}

const Section = styled.section`
    margin: 0;
    h2{
        color: #535353;
    }
`

const Container = styled.div`
`

const CategoryTagContainer = styled.div`

    //border-bottom: 2px solid #e6e6e6;
    padding-bottom: 1rem;

    h2{
        margin: 0;
        margin-bottom: 1rem;
    }
`

const CaregoryTagList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1rem;
`

const TagItem = styled.div`
    display: flex;
    align-items: center;
    ggrid-column: span 1;
`

const TagTitle = styled.a`
    color: #707070;
    font-size: 1rem;
    //background: #707070;
`

const PostSection = styled.div`
    margin-top: 2rem;
`

const SearchContainer = styled.div`
    display: flex;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    max-width: 720px;
    margin: 0 auto;
    margin-bottom: 1rem;
`
const Search = styled.input`
    border: none;
    width: 100%;
    margin-left: 10px;
    &:focus {
        outline: none; 
    }
`

const PostList = styled.div`
`

const PostItem = styled.div`
    border-left: 5px solid transparent;
    box-size: border-box;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    flex: wrap;
    margin-bottom: 0px;
    &:hover{
        background: #f5f5f5;
        border-left: 5px solid #c5c5c5;
    }
`

const PostDescription = styled.div`
    display: flex;
    align-items: center;
`

const PostTitle = styled.a`
    font-size: 1rem;
    color: #707070;
    font-weight: 600;
`

const PostInfo = styled.div`
    display: flex;
    align-items: center;
`

const PostDate = styled.span`
    color: #707070;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    svg{
        font-size: 1rem;
        margin-right: 5px;
    }
`

const ImgBlock = styled.div`
    width: 25px;
    height: 25px;   
    margin-right: 10px;
    img{
        max-width: 25px;
    }
`


export default CategorySection
