import React, {useEffect} from 'react'
import Header from '../components/Header'
import PostSection from '../components/PostSection'
import styled from 'styled-components'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse/lib'
import rehypeStringify from 'rehype-stringify/lib'
import { visit } from 'unist-util-visit'
import parameterize from 'parameterize'
import Link from 'next/link'

/*
    Todo: 
    [] - Fix TOC styling
    [] - Complete TOC functionality
    [X] - Fix scroll css styling
*/

const Post = ({post}) => {
    const toc = [];

    const content = unified()
        .use(rehypeParse, { fragment: true })
        .use(() => {
            return (tree) => {
                visit(tree, 'element', (node) => {
                    if (node.tagName === 'h2') {
                        const id = parameterize(node.children[0].value)
                        node.properties.id = id
                        toc.push({
                            id,
                            title: node.children[0].value
                        })
                    }
                } )
                console.log(tree);
                }
            })
            .use(rehypeStringify)
            .processSync(post.content)
            .toString();

    post.content = content;
    
    let tocHTML =  toc.map(( el ) => {
        return(
            <li key={el.id}>
                <Link href={`#${el.id}`}>
                    <a>{el.title}</a>
                </Link>
            </li>
        )
    });

    console.log("toc", toc)

    return (
        <Main>
            <Header />
            <Sidebar>
                {tocHTML.length > 0 ? (
                    <>
                        <h3>Tabla de contenidos</h3>
                        <ul>
                            {
                                toc.map(( el ) => {
                                    return(
                                        <li key={el.id}>
                                            <Link href={`#${el.id}`}>
                                                <a>{el.title}</a>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </>
                    )
                    : null}
        
            </Sidebar>
            <link rel="stylesheet" href="https://assets.codigohabil.com/css/prism.css"></link>
            <PostSection post={post}/>   
            <script src="https://assets.codigohabil.com/js/prism.js"></script>
        </Main>
    )
}


const Main = styled.main`
    padding-top:3rem;
    position: relative;
    width: 100%;
`
const Sidebar = styled.aside`
    padding: 3rem 0.5rem;
    position: fixed;
    top: 0;
    left: 0;
    border-right: 1px solid #e6e6e6;
    z-index: 1;
    display: none;
    @media (min-width:1250px) {
        display: block;
        width: 20%;
        height: 100vh;
        border-right: 2px solid #dedede;
        max-width: 200px;
    }
    @media (min-width:1400px) {
        width: 25%;
        max-width: 300px;
    }
`


export default Post
