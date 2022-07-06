import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  width: ${(props) => props.pageWidth};
  margin: ${(props) => props.pageMargin};
`;
const Products = ({ pageWidth, pageMargin }) => {
  return (
    <Container pageWidth={pageWidth} pageMargin={pageMargin}>
      {popularProducts.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Products;
