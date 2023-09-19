import {
  Input,
  Dropdown,
  FilterSection,
  ContentTable,
  Table,
  Checkbox,
} from "./featureKit";
import { useState } from "react";

const itemLists = [
  {
    id: "cG9zdDoxODU=",
    title: "Compresión de Strings",
    customProblem: {
      difficulty: "easy",
    },
  },
  {
    id: "cG9zdDoxODU=",
    title: "Validación de anagrama",
    customProblem: {
      difficulty: "easy",
    },
  },
  {
    id: "cG9zdDoxODU=",
    title: "Suma de dos números",
    customProblem: {
      difficulty: "easy",
    },
  },
];

export const TableProblems = () => {
  const [filter, setFilter] = useState("");
  return (
    <div style={{ "margin-top": "1rem" }}>
      <FilterSection>
        <div className="filter__section-btn">
          <Dropdown
            options={["Todos", "Fácil", "Medio", "Difícil"]}
            onChange={(el) => console.log(el)}
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
          <tr>
            <th width="80px">Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
          {itemLists.filter(e => e.title.includes(filter)).map((item) => (
            <RowElement key={item.id} item={item} />
          ))}
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
      <td>{item.title}</td>
      <td>{item.customProblem.difficulty}</td>
    </tr>
  );
};
