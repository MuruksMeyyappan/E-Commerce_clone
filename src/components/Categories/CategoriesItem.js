import React from "react";
import styled from "styled-components";
import { mobile } from "../../ResponseView";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoriesItem = ({ itm }) => {
  let history = useHistory();
  return (
    <Container>
      <Image src={itm.img} />
      <Info>
        <Title> {itm.title}</Title>
        <Button
          onClick={() => {
            history.push("/productList");
          }}
        >
          SHOP NOW{" "}
        </Button>
      </Info>
    </Container>
  );
};

export default CategoriesItem;
