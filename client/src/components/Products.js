import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  width: ${(props) => props.pageWidth};
  margin: ${(props) => props.pageMargin};
`;
const Products = ({ filter, category, sort, pageWidth, pageMargin }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category == "all" || !category
            ? `/api/products`
            : `/api/products?category=${category}`
        );
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    if (sort === "newest") {
      setProducts((product) => {
        return [...product].sort((a, b) => a.createdAt - b.createdAt);
      });
    } else if (sort === "asc") {
      setProducts((product) => {
        return [...product].sort((a, b) => a.price - b.price);
      });
    } else {
      setProducts((product) => {
        return [...product].sort((a, b) => b.price - a.price);
      });
    }
  }, [sort]);

  return (
    <Container pageWidth={pageWidth} pageMargin={pageMargin}>
      {loading ? (
        <h1 style={{ width: "100vw", textAlign: "center" }}> Loading... </h1>
      ) : (
        products.map((item) => {
          return <Product item={item} key={item.id} />;
        })
      )}
    </Container>
  );
};

export default Products;
