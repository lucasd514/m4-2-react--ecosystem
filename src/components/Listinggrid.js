import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListingGrid = ({ itemList }) => {
  return itemList.map((fruits) => (
    <li>
      <img src={fruits.imageSrc} alt={fruits.name} />
      <h2>{fruits.name}</h2>
      <h2>{fruits.latinname}</h2>
    </li>
  ));
};

export default ListingGrid;
