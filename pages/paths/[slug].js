import Head from 'next/head';
import React from 'react';
import { GET_POST_BY_SLUG, GET_ALL_CATEGORIES, GET_CATEGORY_BY_SLUG } from '../../lib/wordpress/api';
import fetcher from '../../lib/fetcher';
import Header from '../../components/Header';
import BannerCategory from '../../components/BannerCategory';
import CategorySection from '../../components/CategorySection';


const category = (props) => {
  
  const postInfo = {
    title: props.params.data.category.name,
    logo: props.params.data.category.categoryInfo.logo,
  }
  //console.log(props.params.data.category);
  const posts = props.params.data.category.posts.nodes;
  const subCategories = props.params.data.category.children.nodes;
  return ( <div>
            <Head>
              <title>Código Hábil</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <BannerCategory props={postInfo}/>
            <CategorySection subCategories = {subCategories} posts={posts} category={postInfo} />
            

          </div>)
};

export default category;

export async function getStaticPaths() {
    const response = await fetcher(GET_ALL_CATEGORIES);
    const allCategories = response.data.categories.edges;
    console.log(allCategories[0].node.parent.node.slug);
    
    const net = allCategories.map(cat => cat.node.parent);
    const child = net.map(cat => {
        return cat!==null ? cat.node.slug :'';
    }).filter(cat => cat !== '');
         
    return {
        paths: child.map(slug => `/paths/${slug}`),
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const variables = {
      id: params.slug,
      idType: 'SLUG'
    }
  
    const data = await fetcher(GET_CATEGORY_BY_SLUG, { variables })
  
    return {
      props: {
        params: data
      },
    }
      
  }