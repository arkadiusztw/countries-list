import {
  FETCH_API_DATA,
  SET_CHOICE,
  SET_SEARCHED,
  PUSH_SEARCH_HISTORY,
  isAPIready,
} from "../types";

export const FetchData = (data) => {
  return {
    type: FETCH_API_DATA,
    payload: data,
  };
};

export const SetChoice = (item) => {
  return {
    type: SET_CHOICE,
    payload: item,
  };
};

export const PushSearch = (item) => {
  return {
    type: SET_SEARCHED,
    payload: item,
  };
};

export const PushHistory = (item) => {
  return {
    type: PUSH_SEARCH_HISTORY,
    payload: item,
  };
};

export const IsAPIready = (status) => {
  return {
    type: isAPIready,
    payload: status,
  };
};
