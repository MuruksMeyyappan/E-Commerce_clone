import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products/Products";
import { mobile } from "../ResponseView";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-style: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })}
`;
const Options = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product</FilterText>
          <Select>
            <Options disabled selected>
              Color
            </Options>
            <Options>White</Options>
            <Options>Black</Options>
            <Options>Red</Options>
            <Options>Blue</Options>
            <Options>Yellow</Options>
            <Options>Pink</Options>
          </Select>
          <Select>
            <Options disabled selected>
              Size
            </Options>
            <Options>XS</Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
            <Options>XXL</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filter Sort</FilterText>
          <Select>
            <Options selected>Newest</Options>
            <Options>Price (asc)</Options>
            <Options>Price (desc)</Options>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
