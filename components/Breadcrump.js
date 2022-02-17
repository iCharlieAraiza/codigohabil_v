import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Breadcrump = ({route}) => {
    console.log('route', route)
    return (
        <BreadcrumbList>
            <BreadcrumbItem>
                <Link href={"/"}>
                    <a>Inicio</a>
                </Link>
            </BreadcrumbItem>
            {route != undefined ?
                <BreadcrumbItem>
                    { route.name }
                </BreadcrumbItem>
            : ''}
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
        color: ${ props => props.theme.colors.gray };
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
