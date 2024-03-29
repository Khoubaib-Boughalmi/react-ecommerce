import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Mobile } from "../responsive";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  height: 60px;
  ${Mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${Mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid #000;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  width: 100%;
  ${Mobile({ width: "0px", border: "none" })}
`;
const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-weight: 700;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${Mobile({ fontSize: "25px" })}
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${Mobile({ justifyContent: "center" })}
`;
const ShoppingCartContainer = styled.div`
  cursor: pointer;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;
  ${Mobile({ display: "none" })}
`;
const Navbar = () => {
  const navigate = useNavigate();
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "#000", fontSize: "20px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo
            onClick={() => {
              navigate("/");
            }}
          >
            TM.
          </Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <ShoppingCartContainer
            onClick={() => {
              navigate("/cart");
            }}
          >
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </ShoppingCartContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
