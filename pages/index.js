import Head from 'next/head'
import { Navbar, Hero, About, Topics} from '../components/v2'

import { GET_ALL_CATEGORIES } from '../lib/wordpress/api'
import fetcher from '../lib/fetcher'
import Script from 'next/script'
//import { useSession, signIn, signOut } from "next-auth/react"

export default function Home({ categories, theme}) {
  return (
    <div>
      <Head>
        <title>Código Hábil - Aprende a programar gratis</title>
        <meta name="description" content="Plataforma de enseñanza de programación gratuita" />
        <link r el="icon" href="/favicon.ico" />
      </Head>
      <Navbar className="fix__navbar" />
      <Hero />
      <About />
      <Topics categories={categories}/> 

        {/*
        <Navbar />
        <Hero />
        <About />
        <Topics categories={categories} />
        */}
      
      {/*Header
      <Header />
      {/*Banner
      <Banner />
      {/*Main
      { /* <MainHomepage categories={categories}/> 
      <Topics categories={categories} />
      */}
      <Script src="noflash.js"  />
    </div>
  )
}

export async function getStaticProps() {
  const categories = await fetcher(GET_ALL_CATEGORIES)
  const el = categories.data.categories.edges.filter(cat => {
    return cat.node.parent != null
  })

  return {
    props: {
      categories: el,
    }
  }

}
