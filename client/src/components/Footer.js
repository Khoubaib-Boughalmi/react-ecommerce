import React from 'react' 
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Room,
  Phone,
  MailOutline,
} from "@mui/icons-material";
import { Mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  /* height: 30vh; */
  flex-wrap: wrap;
  margin-bottom: 2rem;
  ${Mobile({ flexDirection: "column", height: "100%" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  font-size: 25px;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  /* width: 100%; */
`;
const ListItem = styled.li`
  width: 50%;
  cursor: pointer;
  margin: 5px 0;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${Mobile({ display: "none" })}
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
`;
const Payment = styled.img``;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>TM.</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Qui at laboriosam deleniti maxime a
          temporibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi, debitis?
        </Desc>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Shipment</ListItem>
          <ListItem>Team</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Phone style={{ marginRight: "5px" }} />
          (+212)26547896
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "5px" }} />
          contact@TOD.dev
        </ContactItem>
        <ContactItem>
          <Room style={{ marginRight: "5px" }} /> 656,Tanger Morocco
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
