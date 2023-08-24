import React from "react";
import Header from "../../components/Header";
import { Button, Dropdown, RoundButton, Input, Label, Table, Checkbox} from "../../components/featureKit";

const codingproblems = () => {
  return (
    <>
      <Header />
      <section style={{'margin-top':'4rem'}}>
        <Button>Click me</Button>
        <Dropdown />
        <RoundButton>Click me</RoundButton>
        <Input placeholder="Search a new component"/>
        <Label>Label</Label>
        <Table>
          <tr>
            <th width="80px">Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
          <tr>
            <td><Checkbox /></td>
            <td>Data</td>
            <td>Data</td>
          </tr>
          <tr>
            <td><Checkbox /></td>
            <td>Data</td>
            <td>Data</td>
          </tr>
        </Table>
      </section>
    </>
  );
};

export default codingproblems;
