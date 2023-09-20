import React from 'react'
import fetcher from '../../lib/fetcher';
import {  GET_ALL_PROBLEM_LIST, GET_PROBLEM_BY_SLUG } from '../../lib/wordpress/api'


const ProblemPost = ({ params }) => {
  const{data} = params
  console.log("ProblemPost", params.data.problem);

  if(!params.data.problem) return null

  return (
    <article>
      <h1>
        {data.problem.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: data.problem.content }} />
    </article>
  )
}

export async function getStaticPaths() {
  const response = await fetcher(GET_ALL_PROBLEM_LIST);
  const allPosts = response.data.problems.nodes;
  return {
    paths: allPosts.map(post => `/p/${post.slug}`),
    fallback: 'blocking',
    }
}

export async function getStaticProps({params}) {
  const variables = {
    id: params.slug,
    idType: 'SLUG'
  }

  const data = await fetcher(GET_PROBLEM_BY_SLUG, { variables })

  console.log("ProblemPost", data);
  
  
  if (!data.data.problem) {
    return {
      notFound: true,
    }
  }


  return {
    props: {
      params: data
    },
  }
    
}


export default ProblemPost

