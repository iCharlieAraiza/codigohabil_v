import React from "react";
import Header from "../../components/Header";

import {
  Button,
  Dropdown,
  RoundButton,
  Input,
  Label,
  Table,
  Checkbox,
} from "../../components/featureKit";
import BannerCategory from "../../components/BannerCategory";

const codingproblems = () => {
  return (
    <>
      <Header />
      <section style={{ "margin-top": "3rem" }}>
        <BannerCategory props={{  title: "Problemas de código", logo: "https://cdn-icons-png.flaticon.com/512/2889/2889363.png"}} />

        <section className="container-narrow">
          <Button>Click me</Button>
          <div>
            <Button>Click me</Button>
            <Button className="primary">Click me</Button>
          </div>

          <Dropdown />
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
      </section>
    </>
  );
};

export default codingproblems;
