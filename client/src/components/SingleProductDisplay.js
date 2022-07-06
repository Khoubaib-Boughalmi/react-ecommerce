import styled from "styled-components";
import AmountCounter from "./AmountCounter";
import { useState } from "react";
import { Mobile } from "../responsive";
const Container = styled.div`
  padding: 100px;
  display: flex;
  ${Mobile({ padding: "25px 0px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: contain;
  ${Mobile({ height: "45vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${Mobile({ padding: "0 20px" })}
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 200;
  margin-bottom: 3rem;
  ${Mobile({ margin: "20px 0px" })}
`;
const Desc = styled.p`
  font-size: 18px;
  margin: 30px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;
const Filter = styled.div`
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Mobile({ marginRight: "0px" })}
`;
const FilterTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-right: 20px;
`;
const FilterColor = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  padding: 5px 30px;
  border: 1px solid #000;
  outline: none;
`;
const FilterSizeOption = styled.option``;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  ${Mobile({ justifyContent: "center" })}
`;

const Button = styled.button`
  background-color: white;
  padding: 10px 20px;
  border: 2px solid teal;
  font-weight: bold;
  margin-left: 50px;
  cursor: pointer;
  &:hover {
    background-color: #f8f8f8;
  }
`;

const SingleProductDisplay = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
      </ImageContainer>
      <InfoContainer>
        <Title>PRADA Brand new design</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          alias officiis architecto saepe maiores odit sit quaerat ratione quos
          aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur error quidem explicabo eligendi in itaque eum voluptate
          mollitia soluta odio?
        </Desc>
        <Price>$ 20</Price>

        <FilterContainer>
          <Filter>
            <FilterTitle>Color : </FilterTitle>
            <FilterColor color="black" />
            <FilterColor color="darkblue" />
            <FilterColor color="gray" />
          </Filter>
          <Filter>
            <FilterTitle>Size : </FilterTitle>
            <FilterSize>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AmountContainer>
          <AmountCounter />
          <Button>Purchase now</Button>
        </AmountContainer>
      </InfoContainer>
    </Container>
  );
};

export default SingleProductDisplay;
