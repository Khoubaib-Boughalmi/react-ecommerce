import { useState } from "react";
import styled from "styled-components";
const AmountAction = styled.div`
  font-size: 30px;
  margin: 0px 10px;
  cursor: pointer;
`;
const AmountCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 7px;
  border: 1px solid teal;
  font-weight: bold;
`;

const AmountCounter = () => {
  const [count, setCount] = useState(1);
  const manageCount = (action) => {
    if (action === "+") {
      setCount(count + 1);
    } else if (action === "-" && count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <AmountAction
        onClick={() => {
          manageCount("-");
        }}
      >
        -
      </AmountAction>
      <AmountCount>{count}</AmountCount>
      <AmountAction
        onClick={() => {
          manageCount("+");
        }}
      >
        +
      </AmountAction>
    </>
  );
};

export default AmountCounter;
