import React, {useEffect} from 'react'
import Header from '../components/Header'
import PostSection from '../components/PostSection'
import styled from 'styled-components'


const Post = () => {

    return (
        <Main>
            <Header />
            <Sidebar>
                <h2>sdlaksjdklasdkl</h2>
                askdlaksdlk
                ñlsakdlkasñl
            </Sidebar>
            <link rel="stylesheet" href="https://assets.codigohabil.com/css/prism.css"></link>
            <PostSection />   
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
