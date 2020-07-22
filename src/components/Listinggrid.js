import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 1200px;
`;

const Picture = styled.img`
  height: 250px;
  width: 250px;
`;

const Fruit = styled.div`
  width: 275;
  display: inline-block;
  padding: 50px;
`;
const ListingGrid = ({ itemList }) => {
  return (
    <Container>
      {itemList.map((fruits) => (
        <Fruit>
          <Picture src={fruits.imageSrc} alt={fruits.name} />
          <div>{fruits.name}</div>
          <div>{fruits.latinName}</div>
        </Fruit>
      ))}
    </Container>
  );
};

export default ListingGrid;
