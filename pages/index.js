import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import MainHomepage from '../components/MainHomepage'
import { Topics, Navbar, Hero, About } from '../components/V2'

 
import { GET_ALL_CATEGORIES } from '../lib/wordpress/api'
import fetcher from '../lib/fetcher'
import Script from 'next/script'
//import { useSession, signIn, signOut } from "next-auth/react"

export default function Home({ categories, theme}) {
  console.log(theme)
  return (
    <div>
      <Head>
        <title>Código Hábil - Aprende a programar gratis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Navbar />
        <Hero />
        <About />
        <Topics categories={categories} />

      
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

  //console.log(categories.data.categories)
  const el = categories.data.categories.edges.filter(cat => {
    return cat.node.parent != null
  })

  return {
    props: {
      categories: el,
    }
  }

}
