import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PostSection from "../components/PostSection";
import styled from "styled-components";
import { unified } from "unified";
import rehypeParse from "rehype-parse/lib";
import rehypeStringify from "rehype-stringify/lib";
import { visit } from "unist-util-visit";
import parameterize from "parameterize";
import Link from "next/link";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Cheatsheet from "../components/v2/Cheatsheet";

import {NavbarFixed} from "../components/v2/Navbar.jsx";
/*

    Todo: 
    [] - Fix TOC styling
    [] - Complete TOC functionality
    [X] - Fix scroll css styling
*/

const Post = ({ post }) => {
  const toc = [];

  //console.log("Post object", post);

  useEffect(() => {
    const onScroll = () => {
      const scrolly = window.pageYOffset;
      toc.forEach((el) => {
        if (el.position != null) {
          if (scrolly > el.position.start && scrolly < el.position.end) {
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (post === undefined) {
    return null;
  }

  const content = unified()
    .use(rehypeParse, { fragment: true })
    .use(() => {
      return (tree) => {
        visit(tree, "element", (node) => {
          if (node.tagName === "h2") {
            const id = parameterize(node.children[0].value);
            node.properties.id = id;
            //console.log('component')

            toc.push({
              id,
              title: node.children[0].value,
              type: "_h2",
              position: {
                start: node.children[0].position.start.offset,
                end: node.children[0].position.end.offset,
              },
              active: false,
            });
          }

          if (node.tagName === "h3") {
            //console.log("H3 tag", node.children[0])
            if (node.children[0]?.value != undefined) {
              let tagValue = "";
              for (let i = 0; i < node.children.length; i++) {
                if (node.children[i].value != undefined) {
                  tagValue += node.children[i].value;
                }
              }
              const id = parameterize(tagValue);
              node.properties.id = id;
              toc.push({
                id,
                title: tagValue,
                type: "_h3",
              });
            }
          }
        });
        //console.log(tree);
      };
    })
    .use(rehypeStringify)
    .processSync(post.content)
    .toString();

  post.content = content;

  let tocHTML = toc.map((el) => {
    return (
      <li key={el.id}>
        <Link href={`#${el.id}`}>
          <a>{el.title}</a>
        </Link>
      </li>
    );
  });

  //console.log( tocHTML)

  if (post.typeOfPost?.typeOfPost === "Cheatsheet") {
    return (
      <Main>
        <NavbarFixed />
        <Cheatsheet post={post} />
      </Main>
    );
  }

  return (
    <Main>
      <NavbarFixed />
      <Sidebar>
        {tocHTML.length > 0 ? (
          <TOC>
            <TitleTOC>
              <AiOutlineUnorderedList />
              Tabla de contenidos
            </TitleTOC>
            <ListTOC>
              {toc.map((el) => {
                const active = el.active ? "active" : "";
                return (
                  <li key={el.id} className={el.type}>
                    <Link href={`#${el.id}`}>
                      <a>{el.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ListTOC>
          </TOC>
        ) : null}
      </Sidebar>
      <PostSection post={post} />
    </Main>
  );
};

const Main = styled.main`
  padding-top: 3rem;
  position: relative;
  width: 100%;
`;
const Sidebar = styled.aside`
  padding: 3rem 1rem;
  position: absolute;
  min-height: 100%;
  top: 0;
  left: 0;
  border-right: 1px solid #e6e6e6;
  z-index: 1;
  display: none;
  @media (min-width: 1250px) {
    display: block;
    width: 20%;
    border-right: 2px solid rgb(222 222 222 / 50%);
    max-width: 200px;
  }
  @media (min-width: 1400px) {
    width: 25%;
    max-width: 300px;
  }
`;
const TOC = styled.div`
  margin-top: 3.5rem;
  padding: 1rem;
  position: sticky;
  top: 4rem;
  background-color: var(--toc-bg);
  max-height: 85vh;
  overflow: auto;
`;

const TitleTOC = styled.h3`
  font-size: 17px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: var(--toc-title);
  text-transform: uppercase;
  svg {
    font-size: 12px;
    margin-right: 10px;
  }
`;

const ListTOC = styled.ul`
  list-style: none;
  padding: 0;
  li {
    color: var(--toc-li);
    font-weight: 500;
    padding-bottom: 1rem;
    font-size: 16zpx;
    a:hover {
      border-bottom: 2px dotted #b1a257;
    }
    &:before {
      content: "❯";
      margin-right: 0.5rem;
      color: #b1a257;
    }
    &._h3 {
      color: #b4b4b4;
      margin-left: 1rem;
      font-size: 16px;
      &:before {
        content: "";
        margin-right: 0;
        color: #b1a257;
      }
    }
  }
`;
export default Post;
