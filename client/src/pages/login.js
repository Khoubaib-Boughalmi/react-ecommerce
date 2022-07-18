import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const CenterText = styled.h1`
  text-align: center;
  font-size: 54px;
  padding: 3%;
`;
const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #fff;
  color: #000;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 2px solid rgba(0, 0, 0, 0.6);
  font-weight: bold;
  font-size: 14px;
  transition: all 0.3s ease-out;
  :focus,
  :hover {
    border: 2px solid #000;
  }
`;

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
const LinkTextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 1rem;
  flex-wrap: wrap;
`;
const LinkText = styled.div`
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
`;
const Error = styled.h4`
  color: red;
  padding: 10px 0;
`;

const Login = () => {
  // const loginRef = useRef();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(dispatch, { username: userName, password });
  };

  return (
    <>
      <Container>
        <CenterText>Welcome, Please login</CenterText>
        <Form onSubmit={handleSubmit}>
          <Input
            type="userName"
            name="userName"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={(e) => handleSubmit(e)}>Login</Button>
          {error && <Error>Email or password are wrong</Error>}
          <LinkTextContainer>
            <LinkText>Forgot Your Password ?</LinkText>
            <LinkText>Create a New Acount</LinkText>
          </LinkTextContainer>
        </Form>
      </Container>
    </>
  );
};

export default Login;
