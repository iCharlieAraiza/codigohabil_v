import React, {useState} from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';

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
                <Modal> 
                    <Overlay onClick={()=>handleOpen()}/>
                    <SignUpContainer>
                        <LoginTitle>¡Bienvenid@ a Código Hábil!</LoginTitle>
                        <ButtonSection>
                            <SignInBtn className='_github' onClick={() => signIn('github')}> 
                                <AiFillGithub /> 
                                <span>GitHub</span>
                                <SpaceBtn>......</SpaceBtn>
                            </SignInBtn>
                            <SignInBtn className='_google' onClick={() => signIn('google')}> 
                                <AiOutlineGoogle /> 
                                <span>Google</span>
                                <SpaceBtn>......</SpaceBtn>
                            </SignInBtn>
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

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000087;
    z-index: 3; 
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
    padding: 1rem 2rem;
    z-index: 4;
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
    justify-content: space-between;
    border-radius: 5px;
    color: #fff;
    padding: 1rem;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 1rem;

    &:hover{
        opacity: 0.8;
    }


    svg{
        width: 1.5rem;
        height: 1.5rem;
    }

    &._github{
        background-color: #333333;
    }

    &._google{
        background-color: #EA4335;
    }
`

const SpaceBtn = styled.div`
    content: "......";
    color: transparent;
`