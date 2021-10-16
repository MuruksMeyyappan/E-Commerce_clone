import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 1px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ButtonSign = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon color="secondary" style={{ fontSize: "14px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SHOPPING WORLD</Logo>
        </Center>
        <Right>
          <ButtonSign>Login</ButtonSign>
          <ButtonSign>Register</ButtonSign>
          <ButtonSign>
            <IconButton aria-label="cart">
              <Badge badgeContent={1} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </ButtonSign>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
