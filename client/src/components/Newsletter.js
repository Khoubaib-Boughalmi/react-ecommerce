import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { Mobile } from "../responsive";

const Container = styled.div`
  height: 70vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${Mobile({ height: "50vh" })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 10px;
  ${Mobile({ fontSize: "40px" })}
`;
const Description = styled.h4`
  font-size: 25px;
  letter-spacing: 1px;
  color: #3838387a;
  margin-bottom: 30px;
  ${Mobile({ fontSize: "20px", textAlign: "center", padding: "0px 20px" })}
`;
const InputContainer = styled.div`
  width: 60%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #000;
  background-color: #fff;
  ${Mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px 20px;
  font-size: 16px;
  flex: 8;
`;
const Button = styled.button`
  flex: 1;
  opacity: 1;
  height: 100%;
  border: none;
  cursor: pointer;
  background-color: teal;
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Enter Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
