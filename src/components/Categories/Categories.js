import React from "react";
import styled from "styled-components";
import CategoriesData from "../../mockData/Categories";
import CategoriesItem from "./CategoriesItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
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
