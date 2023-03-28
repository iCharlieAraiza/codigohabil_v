import React from 'react'
import {Container, HeaderH2, Section} from './General'
import {AiOutlineCode, AiOutlineSearch} from 'react-icons/ai'

const Categories = () => {
  return (
    <Section>
        <Container>
            <HeaderH2>
                Busca por tema de interés
            </HeaderH2>
            <div className="form-group">
                <div className="search-label">
                    <AiOutlineCode />
                    Tecnología
                </div>
                <input type="text" className='Busca por tema' />
                <AiOutlineSearch />
            </div>

            <ul className="results">
                <li>
                    <a href="#">HTML</a>
                </li>
                <li>
                    <a href="#">CSS</a>
                </li>
                <li>
                    <a href="#">JavaScript</a>
                </li>
                <li>
                    <a href="#">React</a>
                </li>
                <li>
                    <a href="#">Next.js</a>
                </li>
            </ul>
        </Container>
    </Section>
  )
}

export default Categories