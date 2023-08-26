import React, { useState, useRef } from "react";
import styled from "styled-components";

import useClickOutside from "./hooks/useClickOutside";

/*
  Props: 
  - options: Array of options
  - onChange: Function to handle the change
*/

//const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

const Dropdown = ({options, onChange}) => {
  const [open, setOpen] = useState(false);

  const [elementList, setElementList] = useState(
    options?.map((option) => ({
      id: Date.now()-Math.random()+ "select",
      text: option,
    }))
  );

  const [select, setSelect] = useState(elementList && elementList[0]);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useClickOutside(menuRef, () => setOpen(false), buttonRef);

  const toggle = (e) => {
    setOpen(!open);
  };

  const handleOptionClick = (option) => {
    setSelect(option);
    setOpen(false);
    onChange(option.text);
  };

  return (
    <div>
      <DropdownItem onClick={toggle} ref={buttonRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={15}
          height={15}
          fill="none"
        >
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
        </svg>
        {select.text ? select.text : "Select an option"}
        <input type="hidden" name="select-box" value={select.text} />
      </DropdownItem>
      <MenuContainer ref={menuRef}>
        {open && (
          <DropdownMenu>
            {elementList?.map((option) => (
              <li key={option.id} onClick={() => handleOptionClick(option)} className={option.id == select.id ? 'selected' : ''}>
                {option.id == select.id ? <CheckIcon /> : ''}
                {option.text}
              </li>
            ))}
          </DropdownMenu>
        )}
      </MenuContainer>
    </div>
  );
};



function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="checkIcon"
      viewBox="0 0 24 24"
    >
      <path d="M20 6L9 17 4 12"></path>
    </svg>
  );
}


const DropdownItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  font-weight: 700;
  border: 1px solid #dedede;
  padding: 8px 20px;
  background-color: transparent;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 5px;
  user-select: none; 
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
  font-size: 14px;
  border-radius: 5px;
  border: #e6e6e6 1px solid;
  padding: 0;
  margin-top: 4px;
  li {
    top: 0;
    list-style: none;
    cursor: pointer;
    padding: 8px 10px;
    padding-left: 25px;
  }

  li:hover {
    background-color: rgba(204, 204, 204, 0.6);
  }

  .selected { 
    background-color: rgba(204, 204, 204, 0.3);
    padding-left: 0;
  }

  .checkIcon {
    width: 12px;
    margin-right: 5px;
    margin-left: 8px;
  }
`;

const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 210px;
`;

export default Dropdown;
