import React from 'react'
import styled from 'styled-components'

const Breadcrump = () => {
    return (
        <BreadcrumbList>
            <BreadcrumbItem>Inicio</BreadcrumbItem>
            
            <BreadcrumbItem>JavaScript</BreadcrumbItem>
        </BreadcrumbList>
    )
}

const BreadcrumbList = styled.ul`
    display: flex;
    color: #707070;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 1rem 0;
    margin: 0;
    font-size: 14px
`

const BreadcrumbItem = styled.li`
    &:first-child {
        font-weight: bold;
    }

    &:last-child {
        color: #999999;
    }

    &:after {
        content: ">";
        margin: 0 0.5rem;
    }

    &:last-child:after {
        content: "";
    }
`

export default Breadcrump
