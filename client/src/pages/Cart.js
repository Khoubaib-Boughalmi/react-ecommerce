import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import AmountCounter from "../components/AmountCounter";
import Footer from "../components/Footer";
import { Mobile } from "../responsive";

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
  ${Mobile({ padding: "2px 5px" })}
  flex: 1;
`;
const TopTexts = styled.div`
  flex: 2;
  ${Mobile({ display: "flex", justifyContent: "center", alignItems: "center" })}
`;
const TopText = styled.span`
  margin: 0 10px;
  text-decoration: underline;
  cursor: pointer;
  font-size: large;
  font-weight: 600;
  ${Mobile({ textAlign: "center", margin: "0px" })}
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
    margin: 0 20px;
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
            <Product>
              <ProductDetail>
                <Image src="https://m.media-amazon.com/images/I/71T3Q9xoCDL._AC_UX500_.jpg" />
                <Details>
                  <ProductText>
                    <b>Product : </b>New Balance 2022
                  </ProductText>
                  <ProductText>
                    <b>Color : </b>
                    <Color color="lightgray" />
                  </ProductText>
                  <ProductText>
                    <b>ID : </b>98634321324
                  </ProductText>
                  <ProductText>
                    <b>Size : </b>41/42
                  </ProductText>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <AmountCounter />
                </AmountContainer>
                <Price>$ 320</Price>
              </PriceDetail>
            </Product>
            <Product>
              <ProductDetail>
                <Image src="https://m.media-amazon.com/images/I/713vrE6PS6S._AC_UX500_.jpg" />
                <Details>
                  <ProductText>
                    <b>Product : </b>PUMA 2022
                  </ProductText>
                  <ProductText>
                    <b>Color : </b>
                    <Color color="pink" />
                  </ProductText>
                  <ProductText>
                    <b>ID : </b>556748321324
                  </ProductText>
                  <ProductText>
                    <b>Size : </b>41/42
                  </ProductText>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <AmountCounter />
                </AmountContainer>
                <Price>$ 690</Price>
              </PriceDetail>
            </Product>
            <Product>
              <ProductDetail>
                <Image src="https://m.media-amazon.com/images/I/81hvYacFK2L._AC_UX500_.jpg" />
                <Details>
                  <ProductText>
                    <b>Product : </b>Sonic Modal
                  </ProductText>
                  <ProductText>
                    <b>Color : </b>
                    <Color color="CornflowerBlue" />
                  </ProductText>
                  <ProductText>
                    <b>ID : </b>487434303447
                  </ProductText>
                  <ProductText>
                    <b>Size : </b>38/39
                  </ProductText>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <AmountCounter />
                </AmountContainer>
                <Price>$ 122</Price>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 565</SummaryItemPrice>
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
              <SummaryItemPrice>$ 544.22</SummaryItemPrice>
            </SummaryItem>
            <Button>Check Out</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
