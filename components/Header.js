import Image from 'next/image'
import styled from 'styled-components'
import css from '../styles/styles.js'

import { BiSearch } from 'react-icons/bi';
import {GoThreeBars} from 'react-icons/go';
import {AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';


const Header = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
        alert(open);
    }

    return (
        <HeaderContainer>
            <Space />

            <Logo>
                <img 
                    src="https://assets.codigohabil.com/img/logo.png"
                    objectPosition="left" alt="logo" />
            </Logo>


            <SearchContainer>
                {
                    !open ? (
                        <SearchActiveBtn onClick={handleClick}>
                            <BiSearch />
                        </SearchActiveBtn>
                    ) : ''
                }

                {
                    open ? (
                    <SearchWrapper> 
                        <Search placeholder="Start your search" />
                        <AiOutlineClose onClick={handleClick} />
                    </SearchWrapper>) :
                        (<SearchWrapper style={{opa}}> 
                            <Search placeholder="Start your search" />
                            <AiOutlineClose onClick={handleClick} />
                        </SearchWrapper>) 
                }
            </SearchContainer>
            <MenuContainer>
                <LoginBtn>
                    <span>Iniciar Sesión</span>
                </LoginBtn>
                <SignUpBtn>
                    <span>Registrarse</span>
                </SignUpBtn>
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
    padding: 0 1rem;
    background-color: ${css.colors.primary};
    color: #fff;
    position: fixed;
    width: 100%;
    top: 0;
`

const Logo = styled.div`
    img{
        height: 40px;
    }
    @media (min-width:801px) { 
        img{
            height: 50px;
        }
    }
`

const SearchActiveBtn = styled.div`
    display: block; 
    margin-left: auto;
    color: #fff;
    cursor: pointer;
    font-size: 1.2rem;
`



const SearchContainer = styled.div`
    //display: none;    
    margin-left: auto;
    margin-right: 1rem;
    width: 100%;
    max-width: 210px;

    @media (min-width:801px) { 
        /* tablet, landscape iPad, lo-res laptops ands desktops */ 
        display: flex;
        align-items: center;
        color: black;
    }
`
const SearchWrapper = styled.div`
    //display: none;  
    background: #fff;
    width: 100%;
    display: flex;
    border-radius: 14px;
    border: 1px solid #ccc;
    padding:2px 0.5rem;
    opacity: 0;
    svg{
        height: 25px;
        display: block;
        width: 26px;
        background: #b6b6b6;
        border-radius: 50%;
        padding: 5px;
        color: #fff;
        cursor: pointer;
    }
`

const Search = styled.input`
    border: none;
    width: 100%;
    background: transparent;
    &:focus{
        outline: none;
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

const LoginBtn = styled.div`
    background-color: transparent;
    padding: 5px 1rem;
    display: flex;
    align-items: center;
    font-size: 14px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
    svg{
        height: 25px;
        margin-right: 5px;
    }
`

const SignUpBtn = styled.div`
    background-color: transparent;
    padding: 5px 1rem;
    display: flex;
    align-items: center;
    font-size: 14px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    cursor: pointer;
    svg{
        height: 25px;
        margin-right: 5px;
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
