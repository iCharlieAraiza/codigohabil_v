import React from 'react'
import { Navbar, Hero, About, Topics} from '../components/v2'

export default function homepage ({props}) {
  //console.log(props)
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        {
          /*
            <Topics />
          */
        }
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const data = {done: true}

  // Pass data to the page via props
  return { props: { data } }
}
