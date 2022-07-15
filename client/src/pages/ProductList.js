import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Announcement />
      <Navbar />
      <BorderLine />
      <FilterContainer
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <Products
        filter={filter}
        sort={sort}
        category={category}
        pageWidth="80vw"
        pageMargin="0 auto"
      />
      <Pagination />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
