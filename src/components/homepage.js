import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { items } from "../data";
import ListingGrid from "./Listinggrid";

const itemList = Object.values(items);

const Homepage = (props) => {
  return (
    <div>
      <p>welcome to marche tania, founded sometime in the 80s</p>
      <p>
        You'll be greeted with figs, watermelons, mangoes and most of all senor
        yoe and madame wosie. Reg will pick your fruit. oh yes, little vinny can
        make you a nice coffee as you wait. Reggiloso! here's what's in store
        this week:
      </p>
      <ListingGrid itemList={itemList} />
    </div>
  );
};

export default Homepage;
