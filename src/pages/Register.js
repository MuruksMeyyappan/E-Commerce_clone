import React from "react";
import styled from "styled-components";
import { mobile } from "../ResponseView";
import { useHistory } from "react-router-dom";
import UseInput from "../helperFunction/UseInput";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  margin: 20px 10px 0 0;
`;

const Register = () => {
  const [name, setName, resetName] = UseInput("");
  const [lastName, setLastName, resetLastName] = UseInput("");
  const [email, setEmail, resetEmail] = UseInput("");
  const [userName, setUserName, resetUserName] = UseInput("");
  const [password, setPassword, resetPassword] = UseInput("");
  const [confirmPassword, setConfirmPassword, resetConfirmPassword] =
    UseInput("");
  // let history = useHistory();
  const onRegister = (e) => {
    e.preventDefault();
    console.log("#123 name", name);
    console.log("#123 lastName", lastName);
    console.log("#123 email", email);
    console.log("#123 userName", userName);
    console.log("#123 password", password);
    console.log("#123 confirmPassword", confirmPassword);

    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== "" &&
      email !== "" &&
      userName !== "" &&
      email !== "" &&
      name !== "" &&
      lastName !== ""
    ) {
      console.log("yes");
      const inputRequest = {
        name: name,
        lastName: lastName,
        email: email,
        userName: userName,
        password: password,
        confirmPassword: confirmPassword,
      };
      axios
        .post("http://localhost:5000/api/v1/register", inputRequest)
        .then((response) => console.log("#123 response", response))
        .catch((error) => {
          console.error("There was an error!", error);
        });
    } else {
      console.log("no");
    }
  };
  const onReset = (e) => {
    e.preventDefault();
    resetName();
    resetLastName();
    resetEmail();
    resetUserName();
    resetPassword();
    resetConfirmPassword();
  };
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="Name" id="name" {...setName}></Input>
          <Input placeholder="Last Name" id="lastName" {...setLastName}></Input>
          <Input placeholder="Email" id="email" {...setEmail}></Input>
          <Input placeholder="Username" id="userName" {...setUserName}></Input>
          <Input
            type="password"
            placeholder="Password"
            id="password"
            {...setPassword}
            required
          ></Input>
          <Input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            {...setConfirmPassword}
            required
          ></Input>
          <Agreement>
            By creating an account, I consent to the processing my data in
            accordance with <b>Terms and condition</b>
          </Agreement>
          <Button onClick={onRegister}>Create Account</Button>
          <Button onClick={onReset}>Reset</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
