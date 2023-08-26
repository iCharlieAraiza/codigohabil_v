import styled from "styled-components";
import Dropdown from "./Dropdown";

export { Dropdown };

export const Button = styled.button`
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 700;
    border: 1px solid #DEDEDE;
    padding: 8px 20px;
    background-color: transparent;
    color: var(----font-color);
    &.primary {
        background-color: #4a3b3b86;
        color: white;
    }
`


export const RoundButton = styled(Button)`
    border-radius: 17px;
    padding: 5px;
    border: none;
    color: #59797D;
    background-color: #E3F0F2;
    padding: 8px 10px;
    &.grey {
        background-color: #e0e0e0;
    }
`

export const Input = styled.input`
    border: none;
    padding: 10px;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
    background: transparent;
    border-radius: 5px;
    border: 1px solid #C8C8C8;
`

export const Label = styled.label`
    display: initial;
    background-color: #cecece70;
    padding: 0px 10px;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 500;
`

export const Table = styled.table`
    width: 100%;
    border: 1px solid #C8C8C8!important;
    border-radius: 7px!important;
    overflow: hidden;
    margin-top: 1rem;

    &, th, tr {
        border: 0px solid red;
        border-collapse: collapse;
    }

    tr {
        &:first-child {
            border: 1px solid #C8C8C8;
        }
    }

    th, td {
        padding: 10px;
    }
    th {
        background-color: rgba(229, 229, 229, 0.334);
        font-weight: 700;
        text-align: left;
        font-size: 14px;
    }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1px solid #C8C8C8;
    margin-right: 10px;
    &:checked {
        background-color: #527681;

    }

`

