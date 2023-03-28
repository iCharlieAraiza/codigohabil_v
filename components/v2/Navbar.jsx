import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {ContainerFluid, Nav, NavList} from './General'
import Logo from '../../assets/logo/codigohabil.svg'

const Navbar = () => {
  return (
    <Nav>
      <ContainerFluid className='d-flex'>
          <Link href='/'>
            <a>
              <Image src={Logo} alt="logo"/>
            </a>
          </Link>
          <NavList>
            <li>Search</li>
            <li>dark mode</li>
            <li>login</li>
          </NavList>
          <button>
            Menu
          </button>
        </ContainerFluid>
    </Nav>
  )
}

export default Navbar