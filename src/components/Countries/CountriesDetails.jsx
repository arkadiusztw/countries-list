import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../Buttons/button";
import { RiSearchLine } from "react-icons/ri";

const CountriesDetails = () => {
  const id = useSelector((state) => state.data?.choice);
  const data = useSelector((state) => state.data?.data);

  return (
    <Wrapper>
      <Header>
        <Link to="/">
          <ReturnButton>
            <Icon />
            Back to search
          </ReturnButton>
        </Link>
      </Header>

      {data[id]?.name.length > 0 && (
        <Content>
          <Name>{data[id]?.name}</Name>
          {data[id]?.capital.length > 0 && (
            <Capital>Capital: {data[id]?.capital}</Capital>
          )}
          <Currency>Currency Name: {data[id]?.currencies[0].name}</Currency>
          <Currency>Currency Code: {data[id]?.currencies[0].code}</Currency>
          <Currency>Currency Symbol: {data[id]?.currencies[0].symbol}</Currency>
        </Content>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  align-items: baseline;
  @media (min-width: 801px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Header = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 801px) {
    margin-bottom: 100px;
  }
`;
const Content = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  font-size: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 5px;
  background: #00000047;
  border: 0.5px solid #252525;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  @media (min-width: 950px) {
    width: 50%;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 10px;
    border: 0.5px solid #ffffff7d;
    border-radius: 10px;
  }
`;

const Name = styled.div`
  width: 100%;
  margin: 10px;
  text-align: center;
  font-weight: bold;
  min-height: 35px;
  color: yellow;
`;
const Capital = styled.div`
  width: 100%;
  color: gray;
  word-break: break-word;
`;
const Currency = styled.div`
  color: gray;
  width: 100%;
  word-break: break-word;
`;

const ReturnButton = styled(Button)`
  color: white;
  cursor: pointer;

  &:hover {
    color: #fb3131;
  }
`;

const Icon = styled(RiSearchLine)`
  margin: 10px;
`;
export default CountriesDetails;
