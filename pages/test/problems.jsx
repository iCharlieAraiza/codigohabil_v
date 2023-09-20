import React from "react";
import Header from "../../components/Header";
import {GET_ALL_PROBLEM_LIST, GET_ALL_CATEGORIES} from "../../lib/wordpress/api";

import BannerCategory from "../../components/BannerCategory";
import { TableProblems } from "../../components/TableProblems";
import  fetcher  from "../../lib/fetcher.js";
const codingproblems = ({problemList}) => {

  console.log("Props", problemList)
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
        {/*
        <section className="container-narrow">
          <Button>Click me</Button>
          <div>
            <Button>Click me</Button>
            <Button className="primary">Click me</Button>
          </div>

          <Dropdown options={["Hello!", "¡Hola!", "Bon jour!"]} onChange={el => console.log(el)}/>
          <RoundButton>Click me</RoundButton>
          <Input placeholder="Search a new component" />
          <Label>Label</Label>
          <Table>
            <tr>
              <th width="80px">Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
            <tr>
              <td>
                <Checkbox />
              </td>
              <td>Data</td>
              <td>Data</td>
            </tr>
            <tr>
              <td>
                <Checkbox />
              </td>
              <td>Data</td>
              <td>Data</td>
            </tr>
          </Table>
        </section>
        */}
        {/* <section className="container-narrow">  */}

        <div className="container-narrow">
          <TableProblems />
        </div>
      </section>
    </>
  );
};

/*
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
*/
export default codingproblems;
