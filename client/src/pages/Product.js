import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import SingleProductDisplay from "../components/SingleProductDisplay";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import BorderLine from "../components/BorderLine";
const Container = styled.div`
  max-width: 100vw;
`;
const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <BorderLine />
      <SingleProductDisplay />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
