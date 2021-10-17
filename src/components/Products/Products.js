import React from "react";
import styled from "styled-components";
import ProductData from "../../mockData/PopularProducts.json";
import ProductsItem from "./ProductsItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {ProductData.popularProducts.map((itm) => {
        return <ProductsItem itm={itm} key={itm.id} />;
      })}
    </Container>
  );
};

export default Products;
