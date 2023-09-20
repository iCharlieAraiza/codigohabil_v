import Link from "next/link";

import {
  Input,
  Dropdown,
  FilterSection,
  ContentTable,
  Table,
  Checkbox,
  Label
} from "./featureKit";
import { useState } from "react";

const itemLists = [
  {
    id: "wwcvrcG9zdDoxODU=",
    title: "Compresión de Strings",
    customProblem: {
      difficulty: "easy",
    },
  },
  {
    id: "1cG9zdsDoxODU=",
    title: "Validación de anagrama",
    customProblem: {
      difficulty: "easy",
    },
  },
  {
    id: "ppcG9zttdDoxODU=c3",
    title: "Suma de dos números",
    customProblem: {
      difficulty: "easy",
    },
  },
];

const dificultyList = {
  "Fácil": "easy",
  "Medio": "medium",
  "Difícil": "hard",
  "Todos": "",
  "undefined": "",
};

export const TableProblems = ({list = []}) => {
  const [filter, setFilter] = useState("");
  const [dificulty, setDificulty] = useState("Todos");

  console.log(list);
  return (
    <div style={{ "margin-top": "1rem" }}>
      <FilterSection>
        <div className="filter__section-btn">
          <Dropdown
            options={["Todos", "Fácil", "Medio", "Difícil"]}
            onChange={(el) => setDificulty(el)}
          />
        </div>
        <div className="filter__section-input">
          <Input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search a new component"
          />
        </div>
      </FilterSection>

      <ContentTable>
        <Table>
          <thead>
            <tr>
              <th width="80px">Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            {list
              .filter((e) => e.title.includes(filter))
              .filter((e) =>
                e.customProblem.difficulty.includes(dificultyList[dificulty])
              )
              .map((item) => (
                <RowElement key={item.id} item={item} />
              ))}
          </tbody>
        </Table>
      </ContentTable>
    </div>
  );
};

const RowElement = ({ item }) => {
  return (
    <tr>
      <td>
        <Checkbox />
      </td>
      <td style={{ fontWeight: "600" }}>
        <Link href={`/p/${item.slug}`}>{item.title}</Link>
      </td>
      <td><Label> {item.customProblem.difficulty} </Label></td>
    </tr>
  );
};
