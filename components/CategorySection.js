import React from 'react'
import styled from 'styled-components'
import Breadcrump from './Breadcrump'
import { BiSearch, BiCalendar } from 'react-icons/bi';
import Link from 'next/link';

const CategorySection = ({subCategories, posts, category}) => {

    const postsData = [ 
        {   id: 1,  title: 'Fundamentos de java' },
        {   id: 2,  title: 'Fundamentos de java con dibujos' },
        {   id: 3,  title: 'Curso de actulización' },
        {   id: 4,  title: 'Fundamentos de java con dibujos' },
        {   id: 5,  title: 'Fundamentos de PHP con diagramas de flujo' },
    ]

    //console.log('post', posts)
    //console.log('subCategories', subCategories)
    //console.log('categories', category)

    return (
        <Section>
            <Container className="container-narrow">
                <Breadcrump route={{ name: category.title}}/>
                    {
                        subCategories != undefined ? (
                            <CategoryTagContainer>
                            <h2>Contenido</h2>
                                <CaregoryTagList>
                                { subCategories.map((el) => {
                                    return (
                                        <TagItem key={el.id}>
                                            <ImgBlock>
                                                {console.log(el.categoryInfo.icon)}
                                                <img src={el.categoryInfo.icon} />
                                            </ImgBlock>
                                            <TagTitle>
                                                {el.name}
                                            </TagTitle>
                                        </TagItem>)}) }
                                </CaregoryTagList>
                            </CategoryTagContainer> )
                            : ""
                    }

                   {/*     
                    <CategoryTagContainer>
                    <h2>Contenido</h2>
                    <CaregoryTagList>
                        <TagItem>
                            <ImgBlock>
                                <img src="https://assets.codigohabil.com/img/book.svg" />
                            </ImgBlock>
                            <TagTitle>
                                Fundamentos de JavaScript fsdfs
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
                */}

                <PostSection>
                    <SearchContainer>
                        <BiSearch style={{'font-size':'1.2rem'}} />
                        <Search placeholder="Busca por el tema" />  
                    </SearchContainer>
                    <PostList>
                        {posts.map(post => (
                            <Link href={`/posts/${post.slug}`}  key={post.id}>
                                <PostItem>
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
                            </Link>    
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
        font-size: 1.2rem;
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
    grid-gap: 1.5rem 1rem;
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
    margin-top: 1rem;
`

const SearchContainer = styled.div`
    display: flex;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    max-width: 920px;
    margin: 1rem auto 2rem auto;
`
const Search = styled.input`
    border: none;
    width: 100%;
    margin-left: 10px;
    font-size: 1rem;
    svg{
        font-size: 1.2rem!important;
        width: 1.2rem;
    }
    &:focus {
        outline: none; 
    }
`

const PostList = styled.div`
`

const PostItem = styled.a`
    cursor: pointer;
    border-left: 5px solid transparent;
    box-size: border-box;
    //margin: 10px 0;
    display: flex;
    justify-content: space-between;
    padding: 15px 5px;
    flex-wrap: wrap;
    margin-bottom: 0px;
    border-bottom: 1px solid #cbc8c8;
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
    margin-right: 10px;
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
