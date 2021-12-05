import React, { useState } from "react";
import styled from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import sliderData from "../mockData/Data.json";
import { mobile } from "../ResponseView";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideNumber * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Img = styled.img`
  height: 80%;
  width: 100vh;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  width: 100vh;
`;

const Title = styled.h1`
  font-style: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-style: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  let history = useHistory();
  const [slideIndex, setSlideIndex] = useState(0);
  const handelArrowClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handelArrowClick("left")}>
        <ChevronLeftIcon />
      </Arrow>
      <Wrapper slideNumber={slideIndex}>
        {sliderData.sliderItems.map((itm, index) => {
          return (
            <Slide key={index} bg={itm.bg}>
              <ImageContainer>
                <Img src={itm.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{itm.title}</Title>
                <Desc>{itm.desc}</Desc>
                <Button
                  onClick={() => {
                    history.push("/productList");
                  }}
                >
                  SHOP NOW
                </Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>

      <Arrow direction="right" onClick={() => handelArrowClick("right")}>
        <ChevronRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
