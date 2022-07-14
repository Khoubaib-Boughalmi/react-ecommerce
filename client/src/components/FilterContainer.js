import React from 'react' 
import styled from "styled-components";
import { Mobile } from "../responsive";

const Container = styled.div`
  margin: 20px 30px;
  ${Mobile({
    margin: "10px 5px",
    padding: "10px 15px",
  })}
`;
const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Mobile({
    display: " flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "baseline",
  })}
`;
const Title = styled.h1``;
const Filter = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Mobile({ marginTop: "10px" })}
`;
const FilterText = styled.h2`
  ${Mobile({ fontSize: "20px" })}
`;
const Select = styled.select`
  padding: 10px 50px;
  border: 1px solid #000;
  outline: none;
  margin: 20px;
  ${Mobile({ padding: "10px 20px", margin: "5px" })}
`;
const Option = styled.option`
  ${Mobile({ padding: "10px 20px", margin: "5px" })}
`;
const FilterContainer = ({ filter, setFilter, sort, setSort }) => {
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Title>Dresses</Title>
      <FilterWrap>
        <Filter>
          <FilterText>Filter Products :</FilterText>
          <Select onChange={(e) => handleFilter(e)} name="color">
            <Option disabled>Color</Option>
            <Option name="White">White</Option>
            <Option name="Black">Black</Option>
            <Option name="Green">Green</Option>
            <Option name="Blue">Blue</Option>
          </Select>
          <Select onChange={(e) => handleFilter(e)} name="size">
            <Option disabled defaultValue={true}></Option>
            <Option>XXL</Option>
            <Option>XL</Option>
            <Option>XS</Option>
            <Option>S</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products :</FilterText>
          <Select
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <Option value="newest" defaultValue={true}>
              newest
            </Option>
            <Option value="asc">price (asc)</Option>
            <Option value="desc">price (desc)</Option>
          </Select>
        </Filter>
      </FilterWrap>
    </Container>
  );
};

export default FilterContainer;
