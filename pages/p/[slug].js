import React, {useEffect} from "react";
import fetcher from "../../lib/fetcher";
import {
  GET_ALL_PROBLEM_LIST,
  GET_PROBLEM_BY_SLUG,
} from "../../lib/wordpress/api";

import Head from "next/head";

import { NavbarFixed } from "../../components/v2/Navbar.jsx";
import ProblemLayout from "../../components/Layouts/ProblemLayout";

const prism = require("prismjs")
require('prismjs/components/prism-java.min.js');
require('prismjs/components/prism-javascript.min.js');
require('prismjs/components/prism-jsx.min.js');
require('prismjs/components/prism-css.min.js');
require('prismjs/components/prism-scss.min.js');

const ProblemPost = ({ params }) => {
  const { data } = params;

  useEffect(() => {
    prism.highlightAll();
  }, []);

  if (!params.data.problem) return null;

  return (
    <>
      <Head>
          <title>{ data.problem.seo.opengraphTitle }</title>
          <meta name="description" content={ data.problem.seo.opengraphDescription } />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://assets.codigohabil.com/css/prism.css"></link>
      </Head>
      <NavbarFixed />
      <ProblemLayout>
        <h1>{data.problem.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.problem.content }} />
      </ProblemLayout>
    </>
  );
};

export async function getStaticPaths() {
  const response = await fetcher(GET_ALL_PROBLEM_LIST);
  const allPosts = response.data.problems.nodes;
  return {
    paths: allPosts.map((post) => `/p/${post.slug}`),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const variables = {
    id: params.slug,
    idType: "SLUG",
  };

  const data = await fetcher(GET_PROBLEM_BY_SLUG, { variables });

  if (!data.data.problem) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      params: data,
    },
  };
}

export default ProblemPost;
