import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const NotFoundSection = () => {
  return (
    <Main>
        <h1>Ups, error 404 😕</h1>
        <p>La página que quiere acceder no está disponible. Te recomedamos visitar la <Link href={'/'}><PageLink>página de inicio</PageLink></Link></p>
    </Main>)
};

const Main = styled.main`
    padding: 3rem 2rem;
`

const PageLink = styled.a`
    color: #00a8ff;
    border-bottom: 1px dotted #aea535;;
    cursor: pointer;
`

export default NotFoundSection;
