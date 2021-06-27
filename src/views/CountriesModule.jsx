import React from "react";
import styled from "styled-components";
import Countries from "../components/Countries/Countries";

const CountriesModule = () => {
  return (
    <Wrapper>
      <Countries />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default CountriesModule;
