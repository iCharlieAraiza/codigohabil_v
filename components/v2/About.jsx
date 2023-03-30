import React from 'react'
import {Section, Container, HeaderH2, Underline} from './General'

const About = () => {
  return (
    <Section className='about-section'>
      <Container>
        <HeaderH2 className='circle-title'>
          ¿Qué es <Underline>código hábil</Underline>?
        </HeaderH2> 
        <p>Es un portal de recursos de programación en español. ¡Totalmente gratuito y de código abierto! Aquí encontrarás <b>tutoriales</b>, <b>cursos</b> y <b>mucho más</b>. Solo elige el tema que te interese y ¡listo!</p>
      </Container>
    </Section>
  )
}

export default About;