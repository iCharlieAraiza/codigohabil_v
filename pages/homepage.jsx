import React from 'react'
import { Navbar, Hero, About, Categories} from '../components/v2'

const homepage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Categories />
    </>
  )
}

export default homepage