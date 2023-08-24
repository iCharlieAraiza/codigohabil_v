import React, { useState, useRef } from "react";
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
        <AddIcon />
        Dropdown
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

const AddIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
    >
      <g clip-path="url(#clip0_1307_110)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.49991 0.876953C3.84222 0.876953 0.877075 3.8421 0.877075 7.49978C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49978C14.1227 3.8421 11.1576 0.876953 7.49991 0.876953ZM1.82707 7.49978C1.82707 4.36677 4.36689 1.82695 7.49991 1.82695C10.6329 1.82695 13.1727 4.36677 13.1727 7.49978C13.1727 10.6328 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82707 10.6328 1.82707 7.49978ZM7.50003 4.00006C7.77617 4.00006 8.00003 4.22392 8.00003 4.50006V7.00006H10.5C10.7762 7.00006 11 7.22392 11 7.50006C11 7.7762 10.7762 8.00006 10.5 8.00006H8.00003V10.5001C8.00003 10.7762 7.77617 11.0001 7.50003 11.0001C7.22389 11.0001 7.00003 10.7762 7.00003 10.5001V8.00006H4.50003C4.22389 8.00006 4.00003 7.7762 4.00003 7.50006C4.00003 7.22392 4.22389 7.00006 4.50003 7.00006H7.00003V4.50006C7.00003 4.22392 7.22389 4.00006 7.50003 4.00006Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1307_110">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
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
