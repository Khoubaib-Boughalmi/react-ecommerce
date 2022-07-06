import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
`;
const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: lightblue;
  margin: 20px 2px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const Pagination = () => {
  return (
    <Container>
      <List>
        <ListItem>1</ListItem>
        <ListItem>2</ListItem>
        <ListItem>3</ListItem>
        <ListItem>4</ListItem>
        <h2>...</h2>
        <ListItem>11</ListItem>
        <ListItem>12</ListItem>
      </List>
    </Container>
  );
};

export default Pagination;
