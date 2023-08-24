import React, { useState, useRef } from "react";
import Image from 'next/image';
import AddIcon from './svg/add.svg';

import styled from "styled-components";

import useClickOutside from "./hooks/useClickOutside";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useClickOutside(menuRef, () => setOpen(false), buttonRef)

  const toggle = (e) => {
    setOpen(!open);
  };

  return (
    <div>
      <DropdownItem onClick={toggle} ref={buttonRef}>
      <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none">
    <g clipPath="url(#a)">
      <path
        fill="var(--font-color)"
        fillRule="evenodd"
        d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877ZM1.827 7.5a5.673 5.673 0 1 1 11.346 0 5.673 5.673 0 0 1-11.346 0ZM7.5 4a.5.5 0 0 1 .5.5V7h2.5a.5.5 0 1 1 0 1H8v2.5a.5.5 0 0 1-1 0V8H4.5a.5.5 0 0 1 0-1H7V4.5a.5.5 0 0 1 .5-.5Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h15v15H0z" />
      </clipPath>
    </defs>
  </svg>        Click here!
      </DropdownItem>
      <MenuContainer ref={menuRef}>
        {open && (
          <DropdownMenu>
            <li>This is a new element</li>
            <li>This is a new element</li>
            <li>This is a new element</li>
          </DropdownMenu>
        )}
      </MenuContainer>
    </div>
  );
};

const DropdownItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  font-weight: 700;
  border: 1px solid #dedede;
  padding: 8px 20px;
  background-color: transparent;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 5px;
  svg {
    color: var(--font-color);
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--bg);
  border-radius: 5px;
  padding: 10px;
  border: #e6e6e6 1px solid;
  margin-top: 4px;
  li {
    top: 0;
    list-style: none;
  }
`;

const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 210px;
`;

export default Dropdown;
