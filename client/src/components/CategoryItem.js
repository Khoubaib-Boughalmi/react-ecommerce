import React from 'react' 
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Mobile } from "../responsive";

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
  ${Mobile({ height: "30vh !important" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 10px 60px;
  border: 0.2px solid #000;
  background-color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #000;
    color: white;
    border: 0.2px solid #fff;
  }
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>

          <Button>Shop Now</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
