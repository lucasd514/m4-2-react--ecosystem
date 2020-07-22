import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Banner = styled.nav`
  display: flex;
`;

const Redirects = styled.div`
  margin-top: 20px;
  margin-left: 65%;

  justify-content: right;
  display: flex;
`;

const LinkBox = styled.div`
  padding: 3px;
  align-items: right;
`;

const Header = (props) => {
  return (
    <Banner>
      <h2>Marche Tania</h2>
      <Redirects>
        <LinkBox>
          <Link to="/">About us</Link>
        </LinkBox>
        <LinkBox>
          <Link to="/about">Reggieloso</Link>
        </LinkBox>
      </Redirects>
    </Banner>
  );
};

export default Header;
