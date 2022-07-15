import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import AmountCounter from "../components/AmountCounter";
import Footer from "../components/Footer";
import { Mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const key = process.env.REACT_APP_STRIPE;
const Container = styled.div`
  max-width: 100vw;
`;
const Wrapper = styled.div`
  padding: 20px;
  ${Mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  ${Mobile({ padding: "0px", margin: "25px 0px" })}
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${Mobile({ padding: "2px 5px", fontSize: "12px" })}
  flex: 1;
`;
const TopTexts = styled.div`
  flex: 2;
  text-align: center;
  ${Mobile({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })}
`;
const TopText = styled.span`
  margin: 0 10px;
  text-decoration: underline;
  cursor: pointer;
  font-size: large;
  font-weight: 600;
  ${Mobile({ textAlign: "center", margin: "0px", fontSize: "12px" })}
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${Mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 10px;
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
  ${Mobile({ margin: "20px 0px", padding: "0px" })}
  ${Mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 300px;
  ${Mobile({ width: "50%" })}
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${Mobile({ padding: "0px" })}
`;
const Color = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;
const ProductText = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  b {
    margin: 0 5px;
    ${Mobile({ margin: "0 10px" })}
  }
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  ${Mobile({ margin: "30px 0" })}
`;
const AmountContainer = styled.div`
  display: flex;
`;
const Price = styled.span`
  font-weight: 300;
  font-size: 40px;
  ${Mobile({ fontSize: "30px" })}
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid #e5e5e5;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 50vh;
  font-size: 18px;
`;

const SummaryTitle = styled.h1`
  text-align: center;
`;
const SummaryItem = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "bold"};
  font-size: ${(props) => props.type === "total" && "22px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  padding: 15px;
  width: 100%;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [count, setCount] = useState(1);
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log({ ...stripeToken });
  console.log("key=>" + key);
  useEffect(() => {
    const makeReq = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: cart.total * 100,
          }
        );
        console.log(response.data);
        alert("success");
      } catch (error) {
        alert("error");
      }
    };
    stripeToken && makeReq();
  }, [stripeToken]);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Items</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Whishing List (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products?.map((product) => {
              return (
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductText>
                        <b>Product : </b>
                        {product.title}
                      </ProductText>
                      <ProductText>
                        <b>Color : </b>
                        <Color color={product.color} />
                      </ProductText>
                      <ProductText>
                        <b>ID : </b>
                        {product._id}
                      </ProductText>
                      <ProductText>
                        <b>Size : </b>
                        {product.size}
                      </ProductText>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <AmountContainer>
                      <AmountCounter count={count} setCount={setCount} />
                    </AmountContainer>
                    <Price>$ {product.price * product.quantity}</Price>
                  </PriceDetail>
                </Product>
              );
            })}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipment</SummaryItemText>
              <SummaryItemPrice>$ 12.5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>$ -14.88</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="TM"
              image="https://media-exp1.licdn.com/dms/image/C560BAQHCQnfW1Svt6w/company-logo_200_200/0/1579292403857?e=2147483647&v=beta&t=s0-vwqM3hSL9BP76HvlZC5qjYQmYeOZi5FMmo9mcJTY"
              billingAddress
              shippingAddress
              description={`Your Totlal ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={key}
            >
              <Button>Pay Now</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
