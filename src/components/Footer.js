import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Reddit,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../ResponseView";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  flex-direction: column;
`;

const Logo = styled.h1``;
const Decs = styled.div`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  color: #fff;
  border-radius: 50%;
  background-color: #${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItm = styled.li`
  width: 50%;
  margin-bottom: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItm = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOPPING WORLD</Logo>
        <Decs>
          Welcome to Shopping World Kindly follow below social media for new
          Updates
        </Decs>
        <SocialContainer>
          <SocialIcon bg="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon bg="E60023">
            <Reddit />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Link</Title>
        <List>
          <ListItm>Home</ListItm>
          <ListItm>Cart</ListItm>
          <ListItm>Man Fashion</ListItm>
          <ListItm>Woman Fashion</ListItm>
          <ListItm>Accessories</ListItm>
          <ListItm>My Account</ListItm>
          <ListItm>Order Tracking</ListItm>
          <ListItm>My Wishlist</ListItm>
          <ListItm>Terms and Condition</ListItm>
        </List>
      </Center>
      <Right>
        <Title>Contact Details</Title>
        <ContactItm>
          <Room style={{ marginRight: "7px" }} /> A&M Inc, India
        </ContactItm>
        <ContactItm>
          <Phone style={{ marginRight: "7px" }} /> +91 1478523690
        </ContactItm>
        <ContactItm>
          <Mail style={{ marginRight: "7px" }} /> A&M_INC@buddy.dev
        </ContactItm>
      </Right>
    </Container>
  );
};

export default Footer;
