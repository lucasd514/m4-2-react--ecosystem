import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

const Container = styled.div`
  border: 3px solid black;
  display: flex;
`;

const Box = styled.div`
  border: 2px red dashed;
  width: 50vw;
`;

const FruitPic = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 25%;
  padding: 20px;
`;

const Seller = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 25%;
  margin-right: 10px;
`;

const Sellerbox = styled.div`
  display: flex;
  border: 2px yellow dotted;
  padding-top: 10px;
  margin-top: 20px;
`;

const ClickHere = styled.button`
  border-radius: 10px;
  width: 340px;
  height: 65px;
  color: white;
  background-color: skyblue;
  margin-left: 10%;

  &&:hover {
    background-color: green;
    transition-duration: 20ms;
  }
`;
const ItemDetails = () => {
  const { itemId } = useParams();
  const item = items[itemId];
  const seller = sellers[item.sellerId];
  return (
    <Container>
      <Box>
        <FruitPic src={item.imageSrc} />
      </Box>
      <Box>
        <div>
          <h2>{item.name}</h2>
          <h5>{item.latinName}</h5>
        </div>
        <div>
          <p>{item.description}</p>
          <p>
            Product of <i>{item.countryOfOrigin}</i>
          </p>
        </div>
        <ClickHere type="submit" placeholder="buy now!">
          {item.price}$ - Buy Now!
        </ClickHere>
        <Sellerbox>
          <Seller src={seller.avatarSrc} />
          <p>
            sold by: {seller.id}, {seller.storeName}
          </p>
        </Sellerbox>
      </Box>
    </Container>
  );
};

export default ItemDetails;
