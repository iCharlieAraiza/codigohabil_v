import React from 'react'

import { GET_POST_BY_SLUG, ALL_POSTS } from '../../lib/wordpress/api'
import fetcher from '../../lib/fetcher';
import Post from '../post';
import Head from 'next/head';

const post = ({ postData }) => {

  const post = postData.data.post;
  console.log(post.seo.fullHead);  

  return (
    <>
        <Head>
          <title>{ post.seo.title }</title>
          <meta name="description" content={ post.seo.metaDesc } />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Post post={post}/>
    </>
    

  )
}


export default post


export async function getStaticPaths() {
  const response = await fetcher(ALL_POSTS);
  const allPosts = response.data.posts.nodes;
  return {
    paths: allPosts.map(post => `/posts/${post.slug}`),
    fallback: false,
    }
}

export async function getStaticProps({params}) {
  const variables = {
    id: params.slug,
    idType: 'SLUG'
  }

  const data = await fetcher(GET_POST_BY_SLUG, { variables })

  return {
    props: {
      postData: data
    },
  }
    
}

