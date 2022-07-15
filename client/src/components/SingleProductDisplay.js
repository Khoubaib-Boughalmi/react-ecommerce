import React from "react";
import styled from "styled-components";
import AmountCounter from "./AmountCounter";
import { useState, useRef } from "react";
import { Mobile } from "../responsive";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
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
  border: 2px solid #000;
  outline: none;
  font-weight: bold;
`;
const FilterSizeOption = styled.option`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

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

const SingleProductDisplay = ({ product }) => {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState();
  const dispatch = useDispatch();
  const sizeRef = useRef();
  const handleClick = (e) => {
    //update cart
    dispatch(addProduct({ ...product, quantity: count, color, size }));
    if (!size) {
      sizeRef.current.style.border = "2px solid red";
    }
  };
  return (
    <Container>
      <ImageContainer>
        <Image src={product.img} />
      </ImageContainer>
      <InfoContainer>
        <Title>{product.title}</Title>
        <Desc>
          {product.desc} Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Quaerat odio voluptas incidunt saepe. Reprehenderit quaerat
          quasi doloremque dicta labore aspernatur recusandae debitis quis
          blanditiis, voluptatem saepe, aut amet ea consequatur asperiores
          tenetur non, atque reiciendis accusamus modi. Fugit voluptatum ea
          praesentium assumenda asperiores minus doloribus. Voluptate minima
          odio veritatis voluptatem.
        </Desc>
        <Price>${product.price}</Price>

        <FilterContainer>
          <Filter>
            <FilterTitle>Color : </FilterTitle>

            {product.color?.map((color) => {
              return (
                <FilterColor
                  color={color}
                  key={color}
                  value={color}
                  onClick={(e) => {
                    setColor(color);
                  }}
                />
              );
            })}
            <FilterColor color="darkblue" />
            <FilterColor color="gray" />
          </Filter>
          <Filter>
            <FilterTitle>Size : </FilterTitle>
            <FilterSize
              ref={sizeRef}
              onChange={(e) => {
                setSize(e.target.value);
                sizeRef.current.style.border = "2px solid #000";
              }}
            >
              <FilterSizeOption disabled selected>
                Select Size
              </FilterSizeOption>
              {product.size?.map((size) => {
                return <FilterSizeOption key={size}>{size}</FilterSizeOption>;
              })}
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AmountContainer>
          <AmountCounter count={count} setCount={setCount} />
          <Button onClick={(e) => handleClick(e)}>Purchase now</Button>
        </AmountContainer>
      </InfoContainer>
    </Container>
  );
};

export default SingleProductDisplay;
