import React from 'react' 
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  min-width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
const Text = styled.h1`
  color: #000;
  font-size: 74px;
`;
const TextContainer = styled.div`
  position: relative;
`;
const MiniText = styled.h1`
  position: absolute;
  right: 0;
  color: #000;
  font-size: 12px;
`;
const PageNotFound = () => {
  return (
    <Container>
      <TextContainer>
        <Text>404 Page not Found</Text>
        <MiniText>ps : U suck</MiniText>
      </TextContainer>
    </Container>
  );
};

export default PageNotFound;
