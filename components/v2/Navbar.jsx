import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { DarkModeBtn, Container, Nav, NavList, MenuBtn } from "./General";
import Logo from "../../assets/logo/codigohabil.svg";
import useDarkMode from 'use-dark-mode'
import { BsFillSunFill } from 'react-icons/bs';
import { FaRegMoon } from 'react-icons/fa';


const Navbar = () => {
  const darkMode = useDarkMode()

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 100) {
        nav?.classList.add("scrolled");
      } else {
        nav?.classList.remove("scrolled");
      }
    });
  }, []);
  return (
    <Nav>
      <Container className="d-flex">
        <Link href="/">
          <a className="logo-container">
            <Image src={Logo} width="150px" alt="logo" />
          </a>
        </Link>
        <NavList>
          <li>
            {darkMode.value ? (
              <DarkModeBtn onClick={darkMode.disable}>
                <BsFillSunFill width="30px" />
              </DarkModeBtn>
            ) : (
              <DarkModeBtn onClick={darkMode.enable}>
                <FaRegMoon width="30px" />
              </DarkModeBtn>
            )}
          </li>
          <li className="signin-btn">Iniciar sesión</li>
        </NavList>
        <MenuBtn>Menu</MenuBtn>
      </Container>
    </Nav>
  );
};

export default Navbar;