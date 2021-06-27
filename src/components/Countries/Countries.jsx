import React from "react";
import styled from "styled-components";
import Search from "./Search";
import List from "./CountriesList";

const Countries = () => {
  return (
    <Wrapper>
      <Search />
      <List />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export default Countries;
