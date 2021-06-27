import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Buttons/button";
import { BiSearch } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { PushHistory, PushSearch } from "../../actions/DataActions.jsx";
import SearchHistoryList from "./SearchHistoryList";

const Search = () => {
  const dispatch = useDispatch();
  const [inputSearch, setInputSearch] = useState("");
  const [historyActive, setHistoryActive] = useState(false);
  const history = useSelector((state) => state.data.history);

  const handleRequest = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setInputSearch("");
    dispatch(PushSearch(""));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      history?.filter(
        (item) => item.toLowerCase() === inputSearch.toLowerCase()
      ).length > 0
    ) {
    } else {
      dispatch(PushHistory(inputSearch));
    }
    dispatch(PushSearch(inputSearch));
    setHistoryActive(false);
  };

  const handleHistory = (e) => {
    e.preventDefault();
    if (inputSearch.length === 0) {
      setHistoryActive(!historyActive);
    } else setHistoryActive(false);
  };

  return (
    <Wrapper>
      <SearchContainer>
        <FormContainer>
          <Form>
            <Label>
              <Input
                type="text"
                name="search"
                value={inputSearch}
                placeholder="search for country"
                onChange={handleRequest}
                onClick={handleHistory}
              />
              <SubmitButton type="submit" onClick={handleSubmit}>
                <SearchIcon />
              </SubmitButton>
              <ClearButton type="submit" onClick={handleClear}>
                <ClearIcon />
              </ClearButton>
            </Label>
            <SearchHistory visible={historyActive}>
              <SearchHistoryList />
            </SearchHistory>
          </Form>
        </FormContainer>
      </SearchContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background-color: black;
`;
const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FormContainer = styled.div`
  min-width: 335px;
  min-height: 100px;
  margin: 0 auto;
  padding: 2vh;
  @media (min-width: 801px) {
    width: 55vw;
    margin: 0 auto;
  }
`;
const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0px;
  padding: 15px;
  appearance: none;
  outline: none;
  font-size: 1rem;
  margin: 0 auto;
  text-align: left;
  color: white;
  background-color: transparent;
  &::placeholder {
    color: #d4d4d4;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 1rem;
  background: #ffffff26;
  margin-top: 20px;
  width: 100%;
`;
const SubmitButton = styled(Button)`
  padding: 10px;
`;
const ClearButton = styled(Button)`
  padding: 10px;
`;
const SearchIcon = styled(BiSearch)`
  color: white;
  font-size: 30px;
  transition: 0.1s linear;
  &:hover {
    color: #fb3131;
    color: ${(props) => props.color === "vimeo" && "#318ffb"};
    cursor: pointer;
  }
`;
const ClearIcon = styled(MdClear)`
  color: white;
  font-size: 30px;
  transition: 0.1s linear;
  &:hover {
    color: #fb3131;
    color: ${(props) => props.color === "vimeo" && "#318ffb"};
    cursor: pointer;
  }
`;
const SearchHistory = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  width: 100%;
  height: auto;
  position: relative;
  justify-content: center;
  align-items: end;
  background: #ffffff26;
`;

export default Search;
