import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { SetChoice } from "../../actions/DataActions.jsx";

export const Item = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const pushId = (e) => {
    e.preventDefault();
    dispatch(SetChoice(props.id));
    history.push("/details");
  };
  return (
    <Wrapper onClick={pushId}>
      <Name>{props.name}</Name>
      {props.capital.length > 0 && <Capital>Capital: {props.capital}</Capital>}
      <Currency>Currency: {props.currencies[0].name}</Currency>
    </Wrapper>
  );
};
export default Item;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0 auto;
  border: 0.5px solid #252525;
  background: #00000047;
  padding: 15px;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 1rem;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  &:hover {
    background: #2e2e2e46;
    color: yellow;
    cursor: pointer;
  }
  @media (min-width: 950px) {
    border: 0.5px solid #ffffff7d;
    width: 100%;
    min-width: 450px;
    min-height: 150px;
    margin: 0 auto;
    border-radius: 10px;
    align-items: center;
    margin-bottom: 10px;
    &:hover {
      transform: scale(1.02);
      cursor: pointer;
    }
  }
`;

const Name = styled.div`
  width: 100%;
  margin: 10px;
  text-align: center;
  font-weight: bold;
  min-height: 35px;
  color: inherit;
`;
const Capital = styled.div`
  width: 100%;
  color: gray;
  word-break: break-word;
`;
const Currency = styled.div`
  color: gray;
  word-break: break-word;
`;
