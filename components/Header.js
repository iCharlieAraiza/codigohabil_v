import Image from 'next/image'
import styled from 'styled-components'
import css from '../styles/styles.js'

import { FaBeer } from 'react-icons/fa';
import {GoThreeBars} from 'react-icons/go';

const Header = () => {
    return (
        <HeaderContainer>
            <Space />

            <Logo>
                <img 
                    src="https://assets.codigohabil.com/img/logo.png"
                    objectPosition="left" alt="logo" />
            </Logo>
            <SearchContainer>
                Hello 
                <FaBeer />
            </SearchContainer>
            <MenuContainer>
                Menu
            </MenuContainer>
            <MenuButton>
                <MenuBtnIcon />
            </MenuButton>
        </HeaderContainer>
    )
}

const Space = styled.div`
    @media (min-width:801px) { 
        display: none;
    }
`

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-self: center;
    padding: 0 2rem;
    background-color: ${css.colors.primary};
    color: #fff;
    position: fixed;
    width: 100%;
`

const Logo = styled.div`
    img{
        height: 40px;
    }
`

const SearchContainer = styled.div`
    display: none;
    margin-left: auto;
    margin-right: 1rem;

    @media (min-width:801px) { 
        /* tablet, landscape iPad, lo-res laptops ands desktops */ 
        display: flex;
        align-items: center;
    }
`

const MenuContainer = styled.div`
    display: none;

    @media (min-width:801px) { 
        /* tablet, landscape iPad, lo-res laptops ands desktops */ 
        display: flex;
        align-items: center;
    }
`

const MenuButton = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    svg{
        width: 30px;
    }
    @media (min-width:801px) { 
        display: none;
    }

`
    //color: white;
const MenuBtnIcon = styled(GoThreeBars)`

`

export default Header
