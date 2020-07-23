import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

const ItemDetails = () => {
  const { itemId } = useParams();
  const item = items[itemId];
  const seller = sellers[item.sellerId];
  return (
    <div>
      {item.name}
      {seller.storeName}
      <img src={seller.avatarSrc} />
    </div>
  );
};

export default ItemDetails;
