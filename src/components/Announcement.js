import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: teal;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
`;

const Announcement = () => {
  return <Container>Big Billion Deal !!!!!! SAVE UPTO 50% </Container>;
};

export default Announcement;
