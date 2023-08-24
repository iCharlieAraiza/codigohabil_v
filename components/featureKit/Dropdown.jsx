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
        <Image src={AddIcon} width="15px" height="15px" alt="add" />
        Click here!
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

`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
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
