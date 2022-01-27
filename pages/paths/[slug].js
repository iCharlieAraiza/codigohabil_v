import React from 'react';
import { GET_POST_BY_SLUG, GET_ALL_CATEGORIES, GET_CATEGORY_BY_SLUG } from '../../lib/wordpress/api';
import fetcher from '../../lib/fetcher';

const categorie = (props) => {
  console.log("slug - id" );
  console.log(props);
  return <div>
    <h1>Categories</h1>
  </div>;
};

export default categorie;

export async function getStaticPaths() {
    const response = await fetcher(GET_ALL_CATEGORIES);
    const allCategories = response.data.categories.edges;
    console.log(allCategories[0].node.parent.node.slug);
    
    const net = allCategories.map(cat => cat.node.parent);
    const child = net.map(cat => {
        return cat!==null ? cat.node.slug :'';
    }).filter(cat => cat !== '');
    
    console.log(child);
     
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