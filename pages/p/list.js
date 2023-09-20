import React from "react";
import Header from "../../components/Header";
import {GET_ALL_PROBLEM_LIST, GET_ALL_CATEGORIES} from "../../lib/wordpress/api";

import BannerCategory from "../../components/BannerCategory";
import { TableProblems } from "../../components/TableProblems";
import  fetcher  from "../../lib/fetcher.js";
const codingproblems = ({problemList}) => {

  return (
    <>
      <Header />
      <section style={{ "margin-top": "3rem" }}>
        <BannerCategory
          props={{
            title: "Problemas de código",
            logo: "https://cdn-icons-png.flaticon.com/512/2889/2889363.png",
          }}
        />

        <div className="container-narrow">
          <TableProblems list={problemList}/>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const problems = await fetcher(GET_ALL_PROBLEM_LIST)
  //const problemList = problems.data,problems.nodes;
  console.log("Problems", problems.data.problems.nodes)
  
  return {
    props: {
      problemList: problems.data.problems.nodes,
    }
  }

}
export default codingproblems;
