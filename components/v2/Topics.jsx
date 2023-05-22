import React, { useState } from "react";
import {
  Container,
  HeaderH2,
  Section,
  SearchContainer,
  BtnLabel,
  ResultsContainer,
  ResultItem,
} from "./General";
import { AiOutlineCode, AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

const Topics = ({ categories }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const categoriesSet = new Set();

  const categoriesData = categories.map((el) => {
    return el.node.parent.node;
  });

  categoriesData.sort((a, b) => {
    if (a.count > b.count) return -1;
    if (a.count < b.count) return 1;
    return 0;
  });

  return (
    <Section className="vh-70">
      <Container>
        <HeaderH2>Busca por tema de interés</HeaderH2>
        <SearchContainer>
          <BtnLabel className="search-label">
            <AiOutlineCode />
            <span>Tecnología</span>
          </BtnLabel>
          <input type="text" placeholder="Buscar…" onChange={handleChange} />
          <AiOutlineSearch className="search-icon" />
        </SearchContainer>

        <ResultsContainer>
          {
          categoriesData
            .filter((el) => {
              return el.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((el) => {
              if (categoriesSet.has(el.name)) {
                return null;
              }
              categoriesSet.add(el.name);
              return (
                <Card
                  key={el.id}
                  slug={el.slug}
                  id={el.id}
                  logo={el.categoryInfo.logo}
                  name={el.name}
                />
              );
            })}
        </ResultsContainer>
      </Container>
    </Section>
  );
};

export default Topics;
