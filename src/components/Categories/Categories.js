import React from "react";
import styled from "styled-components";
import CategoriesData from "../../mockData/CategoriesJSON";
import CategoriesItem from "./CategoriesItem";
import { mobile } from "../../ResponseView";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {CategoriesData.categoriesItem.map((itm) => {
        return <CategoriesItem itm={itm} key={itm.id} />;
      })}
    </Container>
  );
};

export default Categories;
