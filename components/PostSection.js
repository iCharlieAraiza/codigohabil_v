import React from 'react'
import styled from 'styled-components'

import { AiOutlineClockCircle } from 'react-icons/ai'


const PostSection = () => {
    return (
        <Post className='container-post'>        
            <IconTitle>☕️</IconTitle>
            <Title>Nuevo post lkdasdk mvc whit the change element</Title>
            <SubTitle>App organization explained</SubTitle>

            <PostHeaderContainer>
                <PostInfo>
                    <Author>
                        <ProfileImg>
                            <img src="https://miro.medium.com/fit/c/28/28/1*JAheLM4qvY3oo7iY9s4Qgw.jpeg" alt="logo" />
                        </ProfileImg>
                        Carlos Araiza
                    </Author>
                    <Date>4 days ago</Date>
                    <ReadTime>
                        <AiOutlineClockCircle/> 20 min
                    </ReadTime>
                </PostInfo>
            </PostHeaderContainer>

            <p>MVC is short for Model, View, and Controller. MVC is a popular way of organizing your code. The big idea behind MVC is that each section of your code has a purpose, and those purposes are different. Some of your code holds the data of your app, some of your code makes your app look nice, and some of your code controls how your app functions.</p>
            <p>MVC is a way to organize your code’s core functions into their own, neatly organized boxes. This makes thinking about your app, revisiting your app, and sharing your app with others much easier and cleaner. lkas dlka slkd aslkd lkas dkla slkd akls dlka sldsadask aslkd alks </p>
            <Separator />
        </Post>
    )
}

const Post = styled.article`
    background: #fff;
    margin-top: 1rem;
    @media (min-width:600px) { 
        /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ 
        margin-top: 3rem;
    }
`

const SubTitle = styled.span`
    font-size: 1.7rem;
    margin: 0.5rem 0;
    color: #9e9e9e;
    display: block;
`

const IconTitle = styled.span`
    font-size: 1.8rem;
    float: left;
    margin-right: 0.8rem;
    @media (min-width:600px) { 
        /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ 
        font-size: 2.4rem;
        margin-right: 1rem;

    }
`

const Title = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-weight: 700;
    line-height: 1.2;
    @media (min-width:600px) { 
        /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ 
        font-size: 2.75rem;
    }
`

const ProfileImg = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #b6b6b6;
    margin-right: 0.5rem;  
    overflow: hidden;
    img{
        float: left;
    }
`

const PostHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const PostInfo = styled.p`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #b1a257;
    font-family: 'Open Sans',sans-serif;
    margin: 0;
    span{
        margin-right: 1rem;
    }
`

const Separator = styled.div`
    border-top: 2px solid #e6e6e6;
    margin: 3rem 0;
`

const Author = styled.span`
    display: flex;
    align-items: center;
`

const Date = styled.span`
    `

const ReadTime = styled.span`
    display: flex;
    align-items: center;
    svg{
        margin-right: 5px;
        color: gray;
    }
`

export default PostSection
