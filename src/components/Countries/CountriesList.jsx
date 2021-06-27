import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";
import Delayed from "../Notice/DelayedNotice";
import GetData from "../../api/api";
import Item from "./CountriesListItem";
import { useSelector, useDispatch } from "react-redux";
import { TiSortAlphabetically } from "react-icons/ti";
import { TiThSmall } from "react-icons/ti";

const List = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const isAPIready = useSelector((state) => state.data.isAPIready);
  const [sortingActive, setsortingActive] = useState(false);
  const [allCountriesActive, setAllCountriesActive] = useState(false);
  const searched = useSelector((state) => state.data.searched);
  const phrase = searched || "united";

  useEffect(() => {
    if (!isAPIready) {
      dispatch(GetData());
    }
  }, [dispatch, isAPIready]);

  const dataFiltered = data?.filter((item) =>
    item.name.toLowerCase().includes(phrase.toLowerCase())
  );
  const countriesItemFiltered = dataFiltered.map((item, index) => (
    <Item key={index} {...item} />
  ));
  const dataFilteredSorted = dataFiltered.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const countriesItemFilteredSorted = dataFilteredSorted.map((item, index) => (
    <Item key={index} {...item} />
  ));
  const countriesAll = data.map((item, index) => (
    <Item key={index} {...item} />
  ));

  const handleSortingBtn = () => {
    setsortingActive(!sortingActive);
  };
  const handleShowAllCountriesBtn = () => {
    setAllCountriesActive(!allCountriesActive);
  };

  const listResults = () => {
    if (allCountriesActive) {
      return countriesAll;
    }
    if (sortingActive) {
      return countriesItemFilteredSorted;
    } else {
      return countriesItemFiltered;
    }
  };

  return (
    <>
      {isAPIready ? (
        <>
          {data?.length > 0 && (
            <Wrapper>
              <ToolsBar>
                <SortIcon onClick={handleSortingBtn} checked={sortingActive} />
                <ShowAllCountriesIcon
                  onClick={handleShowAllCountriesBtn}
                  checked={allCountriesActive}
                />
              </ToolsBar>
              <ListContainer>{listResults()}</ListContainer>
            </Wrapper>
          )}
        </>
      ) : (
        <>
          <Loading>
            <ReactLoading type={"cylon"} width={150} height={150} />
          </Loading>
          <Delayed>
            <DelayedBox>
              <Notice>
                <p>Loading takes too long...</p>
                <p>Possible problems with API.</p>
              </Notice>
            </DelayedBox>
          </Delayed>
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  background: black;
  color: white;
  margin-bottom: 5vh;
  @media (min-width: 950px) {
    width: 50vw;
    margin: 0 auto;
    align-items: stretch;
    flex-flow: wrap;
    flex-direction: row;
  }
`;
const ToolsBar = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;
const ListContainer = styled.ul`
  width: 100%;
`;

const SortIcon = styled(TiSortAlphabetically)`
  padding: 10px;
  font-size: 3rem;
  color: white;
  background: ${(props) => (props.checked ? "#ffffff26" : "transparent")};
  border-radius: 50px;

  &:hover {
    cursor: pointer;
  }
`;

const ShowAllCountriesIcon = styled(TiThSmall)`
  padding: 10px;
  font-size: 3rem;
  color: white;
  background: ${(props) => (props.checked ? "#ffffff26" : "transparent")};
  border-radius: 50px;
  &:hover {
    cursor: pointer;
  }
`;

const Loading = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  justify-content: center;
  flex-direction: row;
  flex-flow: wrap;
  align-items: stretch;
  color: white;
  position: relative;
`;
const DelayedBox = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  position: relative;
`;
const Notice = styled.span`
  color: #fb3131;
  font-size: 12px;
`;
export default List;
