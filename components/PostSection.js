import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const prism = require("prismjs")
require('prismjs/components/prism-java');

import moment from "moment";


import { AiOutlineClockCircle } from 'react-icons/ai'


const PostSection = ({post}) => {
    const title =  post.title;
    const date = post.date;
    const content = post.content;
    const subtitle = post.subtitle.subtitle;
    const author = post.author.node.name;
    
    const [minutes, setMinutes] = useState(1);

    useEffect(() => {
        prism.highlightAll();
    }, []);
    
    useEffect(() => {
        const text = document.querySelector('.words').innerText;
        const wpm = 225;
        const words = text.trim().split(/\s+/).length;
        setMinutes(Math.ceil(words / wpm));
        //const minutes = Math.ceil(words / wpm);
    }, []);


    return (
        <Post className='container-post post'>        
            <IconTitle>☕️</IconTitle>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <PostHeaderContainer>
                <PostInfo>
                    <Author>
                        <ProfileImg>
                            <img src="https://miro.medium.com/fit/c/28/28/1*JAheLM4qvY3oo7iY9s4Qgw.jpeg" alt="logo" />
                        </ProfileImg>
                        { author }
                    </Author>
                    <Date>Publicado: { moment(date).format("L") }</Date>
                    <ReadTime>
                        <AiOutlineClockCircle/> {minutes} min
                    </ReadTime>
                </PostInfo>
            </PostHeaderContainer>
            <div dangerouslySetInnerHTML={{__html: content}} className="words"/>
            
            {/* 
            <p><b>MVC is short for Model, View, and Controller.</b> MVC is a popular way of organizing your code. The big idea behind MVC is that each section of your code has a purpose, and those purposes are different. Some of your code holds the data of your app, some of your code makes your app look nice, and some of your code controls how your app functions.</p>
            <p>MVC is a way to organize your code’s core functions into their own, neatly organized boxes. This makes thinking about your app, revisiting your app, and sharing your app with others much easier and cleaner. lkas dlka slkd aslkd lkas dkla slkd akls dlka sldsadask aslkd alks </p>
           
            <Separator />

            <h2>Create new function</h2>
            <FeatureContent>
                <FeatureTitle>
                    Important to know
                </FeatureTitle>
                <FeatureList>
                    <li>New element like how you make Thanksgiving dinner. You have const [.] = arrayToDestruct</li>
                    <li>MVC is a popular way of organizing your code. The big idea behind MVC is that each section of your code has a purpose, and those purposes are different. Some of your code holds the data of your app</li>
                </FeatureList>
            </FeatureContent>
            <p>MVC is short for Model, View, <b>and Controller. MVC is a popular</b> way of organizing your code. The big idea behind MVC is that each section of your code has a purpose, and those purposes are different. Some of your code holds the data of your app, some of your code makes your app look nice, and some of your code controls how your app functions.</p>
            <p>It’s kind of like how you make <a href='/'>Thanksgiving dinner. You have a fridge </a>full of food, which is like the Model. The fridge (Model) contains the raw materials we will use to make dinner.</p>

            <h3>Background</h3>
            <p>MVC is short for Model, View, and Controller. MVC is a popular way of organizing your code. The big idea behind MVC is that each section of your code has a purpose, and those purposes are different. Some of your code holds the data of your app, some of your code makes your app look nice, and some of your code controls how your app functions.</p>
            <p>It’s kind of like how you make Thanksgiving dinner. You have a fridge full of food, which is like the Model. The fridge (Model) contains the raw materials we will use to make dinner.</p>
            <p>Then, you have table-settings, silverware, etc., which are what your hungry friends and family use to eat dinner. Table-top items are like the View. They let your guests interact with your Model and Controller’s creation.</p>

            <pre>
                <code className='language-java'>
                    System.out.println("Hello workld");{<br/>}
                    System.out.println("Hello workld");
                </code>
            </pre>

            <Separator />

            <h2>Create new function</h2>
            <img src="https://miro.medium.com/max/1400/1*yUgoCAvFMatPAKWT5yUcnA.jpeg" alt="logo" />
            <p>MVC is short for Model, View, and Controller. MVC is a popular way of organizing your code. The big idea behind MVC is that each section of your code has a purpose, and those purposes are different. Some of your code holds the data of your app, some of your code makes your app look nice, and some of your code controls how your app functions.</p>
            <p>It’s kind of like how you make <code>.nacv-sidebar-hero</code> Thanksgiving dinner. You have a fridge full of food, which is like the Model. The fridge (Model) contains the raw materials we will use to make dinner.</p>

            <h3>Background</h3>
            <p>MVC is short for Model, View, and Controller. MVC is a popular way of organizing your code. The big idea behind MVC is that each section of your code has a purpose, and those purposes are different. Some of your code holds the data of your app, some of your code makes your app look nice, and some of your code controls how your app functions.</p>
            <p>It’s kind of like how you make Thanksgiving dinner. You have a fridge full of food, which is like the Model. The fridge (Model) contains the raw materials we will use to make dinner.</p>
            <p>Then, you have table-settings, silverware, etc., which are what your hungry friends and family use to eat dinner. Table-top items are like the View. They let your guests interact with your Model and Controller’s creation.</p>

            <ul>
                <li>New option for elment</li>
                <li>short for Model, View, and</li>
                <li>Content for it</li>
            </ul>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Carlos Araiza</td>
                        <td>20</td>
                        <td>Colombia</td>
                    </tr>
                    <tr>
                        <td>Carlos Araiza</td>
                        <td>20</td>
                        <td>Colombia</td>
                    </tr>
                </tbody>
            </table>

            <Separator />

            <h2>Cuestionario</h2>

            <p>What is correct?</p>
            <div className='question-container'>
                <input type='radio' name='questionary' id='a'/>
                <label for="a">It works well</label>
            </div>

            <div className='question-container'>
                <input type='radio' name='questionary' id='b'/>
                <label for="b">It doesn't work well</label>  
            </div>

            <div className='question-container'>
                <input type='radio' name='questionary' id='c'/>
                <label for="c">It doesn't work at all</label>
            </div>

            */}
        </Post>
    )
}

const Post = styled.article`
    background: #fff;
    margin-top: 1rem;
    padding-bottom: 2rem;

    a{
        color: #b1a257
    }

    label, li{
        font-family: 'IBM Plex Serif', serif;
        line-height: 32px;
        font-size: 18px;
        color: rgba(41, 41, 41, 1);
    }

    h2, h3, h4{
        color: #2e2e2e;
        margin: 0;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    h2{
        font-size: 1.8em;
        &::before {
            content: "§. ";
            color: #8b8b8b;
        }
    }

    tr{
        border-bottom: rgb(241, 242, 243) 1px solid;
    }

    h3{
        font-size: 1.4rem;
    }

    table{
        border: 1px solid #f1f2f3;
        width: 100%;
        margin-bottom: 1rem;
        background-color: transparent;
        border-collapse: collapse;
    }

    thead {
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
        border-bottom: rgb(241, 242, 243) solid 1px;
    }

    .table thead th {
        border-bottom: 1px solid #eaeff4;
    }

    tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }

    th, td {
        border-top: 0;
        font-weight: 400;
        padding: 0.75rem;
    }

    th{
        font-weight: 700;
        color: #3c3c3c;
        font-size: 16px;
    }

    .question-container{
        color: #57585f;
        margin-bottom: 1rem;
    }

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
    color: #2e2e2e;
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
    flex-wrap: wrap;
    margin-top: 1rem;
    margin-bottom: 2rem;
`

const PostInfo = styled.p`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
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
    margin: 4rem 0;
    margin-bottom: 3rem;
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

const FeatureContent = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color: #f9f9f9;
    border: 1px solid #D3D3D3;
    box-shadow: 10px 10px 0 0 rgb(114 130 149 / 80%);
    width: calc(100% - 5px);
    padding: 1rem;
`
const FeatureTitle = styled.h3`
    color: #525252;
    margin: 0;
    font-weight: 700;
    line-height: 1.2;
    margin: 1rem!important;
    font-size: 1.5rem;
`
const FeatureList = styled.ul`
    li::marker{
        color: #b1a257;
    }
    `

export default PostSection
