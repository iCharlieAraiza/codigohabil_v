import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import MainHomepage from '../components/MainHomepage'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { GET_ALL_CATEGORIES } from '../lib/wordpress/api'
import fetcher from '../lib/fetcher'


export default function Home({ categories }) {
  console.log("categories", categories[0].node.parent.node.categoryInfo.logo)

  return (
    <div>
      <Head>
        <title>Código Hábil</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/*Header*/}
      <Header />
      {/*Banner*/}
      <Banner />
      {/*Main*/}
      <MainHomepage categories={categories}/>


    </div>
  )
}

export async function getStaticProps() {

  const categories = await fetcher(GET_ALL_CATEGORIES)

  //console.log(categories.data.categories)
  const el = categories.data.categories.edges.filter(cat => {
    return cat.node.parent != null
  })

  console.log(el)

  return {
    props: {
      categories: el
    }
  }

}
