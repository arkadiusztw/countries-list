import React from "react";
import styled from "styled-components";
import CountriesDetails from "../components/Countries/CountriesDetails";

const Details = () => {
  return (
    <Wrapper>
      <CountriesDetails />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

export default Details;
