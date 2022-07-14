import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import SingleProductDisplay from "../components/SingleProductDisplay";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import BorderLine from "../components/BorderLine";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethod";
const Container = styled.div`
  max-width: 100vw;
`;
const Product = () => {
  const fullPathName = useLocation();
  const productId = fullPathName.pathname.split("/")[2];
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const res = await publicRequest.get(`/products/find/${productId}`);
      setProduct(res.data);
    };
    getProduct();
  }, []);
  return (
    <Container>
      <Announcement />
      <Navbar />
      <BorderLine />
      <SingleProductDisplay product={product} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
