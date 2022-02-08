import React, {useState} from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';

export default function Login() {
    const { data: session } = useSession()

    const [open, setOpen] = useState(false);

    const handleOpen= () => {
        setOpen(!open);
    }

    if (session) {
    return (
        <>
        <Username>
            <FaUserAlt />
            {
                session.user.name != undefined ? 
                session.user.name 
                : session.user.email
            }
        </Username>
        <LoginBtn onClick={() => signOut()}>Cerrar Sesión</LoginBtn>
        
        </>
    )
    }
    return (
    <>
        <LoginBtn onClick={()=> handleOpen()}><span>Iniciar Sesión</span></LoginBtn>
        {
            open == true ? (
                <Modal onClick={()=>handleOpen()}> 
                    <SignUpContainer>
                        <LoginTitle>¡Bienvenid@ a Código Hábil!</LoginTitle>
                        <ButtonSection>
                            <SignInBtn className='_github' onClick={() => signIn()}> <AiFillGithub /> GitHub</SignInBtn>
                        </ButtonSection>
                    </SignUpContainer>
                </Modal> ) : ''
        }
    </>
    )
}

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
const Username = styled.div`
    margin-right: 1rem;
    svg{
        margin-right: 10px;
    }
`

const Modal = styled.div`
    //position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000087;
    position: absolute;
    z-index: 2;
    height: 100vh;
`

const SignUpContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    max-width: 500px;
    background-color: #fff;
    padding: 1rem;
`

const LoginTitle = styled.h3`
    color: #323232;
    text-align: center;
    font-size: 1.5rem;
`

const ButtonSection = styled.div`

`

const SignInBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color: #fff;
    padding: 1rem;
    cursor: pointer;
    font-weight: bold;

    &:hover{
        opacity: 0.8;
    }


    svg{
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.5rem;
    }

    &._github{
        background-color: gray;
    }
`