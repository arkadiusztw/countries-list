import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { PushHistory, PushSearch } from "../../actions/DataActions.jsx";

const List = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.data.history);

  const handleRequest = (e) => {
    e.preventDefault();
    const request = e.target.innerHTML;
    if (
      history?.filter((item) => item.toLowerCase() === request.toLowerCase())
        .length > 0
    ) {
    } else {
      dispatch(PushHistory(request));
    }
    dispatch(PushSearch(request));
  };

  const historyItem = history?.map((item, index) => {
    if (/^[a-zA-Z]/.test(item)) {
      return (
        <Item key={index} value={item} onClick={handleRequest}>
          {item}
        </Item>
      );
    } else {
      return null;
    }
  });

  return (
    <Wrapper>
      <Items>{historyItem}</Items>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: auto;
  z-index: 99;
  background-color: #1d1d1d;
  flex-direction: column;
  top: 0;
`;

const Items = styled.ul`
  color: white;
`;
const Item = styled.li`
  list-style: none;
  margin: 10px;
  padding: 10px;
  &:hover {
    background: #0000002e;
  }
`;
export default List;
