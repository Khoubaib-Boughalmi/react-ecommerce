import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import FilterContainer from "../components/FilterContainer";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import BorderLine from "../components/BorderLine";

const Container = styled.div``;
const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <BorderLine />
      <FilterContainer />
      <Products pageWidth="80vw" pageMargin="0 auto" />
      <Pagination />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
