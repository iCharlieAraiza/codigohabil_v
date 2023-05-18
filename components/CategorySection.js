import React, { useState } from "react";
import styled from "styled-components";
import Breadcrump from "./Breadcrump";
import { BiSearch, BiCalendar } from "react-icons/bi";
import Link from "next/link";

const CategorySection = ({ subCategories, posts, category }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const [filterCat, setFilterCat] = useState([]);

  const onClickFilter = (e) => {
    if (e === filterCat) {
      setFilterCat([]);
      return;
    }
    setFilterCat(e);
  };

  const checkFulteredPosts = (categories) => {
    if (filterCat.length <= 0) {
      return true;
    }

    return categories.some((el) => {
      return el.name === filterCat;
    });
  };

  return (
    <Section>
      <Container className="container-narrow">
        <Breadcrump route={{ name: category.title }} />
        {subCategories != undefined ? (
          <CategoryTagContainer>
            <ContentTitle>Contenido</ContentTitle>
            <CaregoryTagList>
              {subCategories.map((el) => {
                return (
                  <TagItem
                    key={el.id}
                    onClick={() => onClickFilter(el.name)}
                    className={`${
                      el.name == filterCat ? "active" : "inactive"
                    }`}
                  >
                    <ImgBlock>
                      <img src={el.categoryInfo.icon} />
                    </ImgBlock>
                    <TagTitle>{el.name}</TagTitle>
                  </TagItem>
                );
              })}
            </CaregoryTagList>
          </CategoryTagContainer>
        ) : (
          ""
        )}

        <PostSection>
          <SearchContainer>
            <BiSearch style={{ fontSize: "1.2rem" }} />
            <Search
              placeholder="Busca por el tema"
              onChange={(target) => handleChange(target)}
            />
          </SearchContainer>
          <PostList>
            {posts
              .filter((el) => {
                return (
                  el.title.toLowerCase().includes(search.toLowerCase()) &&
                  checkFulteredPosts(el.categories.nodes)
                );
              })
              .map((post) => (
                <Link href={`/posts/${post.slug}`} key={post.id}>
                  <PostItem>
                    <PostDescription>
                      <ImgBlock>
                        <img
                          src="https://assets.codigohabil.com/img/document.svg"
                          alt="cursos-programacion"
                        />
                      </ImgBlock>
                      <PostTitle>{post.title}</PostTitle>
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
  );
};

const Section = styled.section`
  margin: 0;
  h2 {
    color: #535353;
    font-size: 1.2rem;
  }
`;

const Container = styled.div``;

const CategoryTagContainer = styled.div`
  //border-bottom: 2px solid #e6e6e6;
  padding-bottom: 1rem;

  h2 {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const CaregoryTagList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1.5rem 1rem;
`;

const ContentTitle = styled.h2`
  color: var(--color-medium-gray) !important;
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  grid-column: span 1;
  cursor: pointer;
  padding: 9px;
  border-radius: 5px;
  //box-shadow: 0px 0px 4px #c8c8c8;
  border: 1px solid #dbdbdb;
  &.active {
    background: #f2f2f2;
  }
`;

const TagTitle = styled.a`
  color: var(--font-medium);
  font-size: 1rem;
  //background: #707070;
`;

const PostSection = styled.div`
  color: var(--medium-font);
  margin-top: 1rem;
`;

const SearchContainer = styled.div`
  display: flex;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  max-width: 920px;
  margin: 1rem auto 2rem auto;
`;
const Search = styled.input`
  border: none;
  width: 100%;
  margin-left: 10px;
  font-size: 1rem;
  background-color: transparent;
  color: var(--font-color);
  svg {
    font-size: 1.2rem !important;
    width: 1.2rem;
  }
  &:focus {
    outline: none;
  }
`;

const PostList = styled.div``;

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
  &:hover {
    background: var(--hover-list);
    border-left: 5px solid #c5c5c5;
  }
`;

const PostDescription = styled.div`
  display: flex;
  align-items: center;
`;

const PostTitle = styled.a`
  font-size: 1rem;
  color: var(--font-medium);
  font-weight: 600;
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
`;

const PostDate = styled.span`
  color: var(--color-gray);
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  margin-right: 10px;
  svg {
    font-size: 1rem;
    margin-right: 5px;
  }
`;

const ImgBlock = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  img {
    max-width: 25px;
  }
`;

export default CategorySection;
