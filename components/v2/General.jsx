import styled from 'styled-components'
import HeroBg from '../../assets/hero-bg.png'


export const ContainerFluid = styled.div`
    width: 100%;
    padding: 0 1rem;
`

export const Container = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1248px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 24px;
    padding-left: 24px;
    &.d-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
    .d-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const NavList = styled.ul`
    display: none;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
    }
`

export const HeroContainer = styled.section`
    background-image: url(${HeroBg.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
`


export const HeaderH1 = styled.h1`
    font-size: 24px;
    @media (min-width: 576px) {
        font-size: 45px;
    }
`

export const HeaderH2 = styled.h2`
    font-size: 24px;
    @media (min-width: 576px) {
        font-size: 36px;
    }
`


export const FeaturedLabel = styled.span`
    font-style: italic;
`

export const DisplayParagraph = styled.p`
    font-size: 18px;
    color: inherit;
    @media (min-width: 576px) {
        font-size: 24px;
    }
`

export const Section = styled.section`
    padding: 2rem 0;
`