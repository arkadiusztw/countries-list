import {
  PUSH_SEARCH_HISTORY,
  FETCH_API_DATA,
  SET_CHOICE,
  SET_SEARCHED,
  isAPIready,
} from "../types";

const initialState = {
  history: [],
  data: [],
  choice: "",
  searched: "",
  isAPIready: false,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_SEARCH_HISTORY:
      return { ...state, history: [action.payload, ...state.history] };

    case FETCH_API_DATA:
      let nextId = 0;
      let arrayFilledWithID = action.payload;
      arrayFilledWithID.forEach((item, i) => {
        item.id = nextId++;
      });
      return { ...state, data: arrayFilledWithID };

    case SET_CHOICE:
      return { ...state, choice: action.payload };

    case SET_SEARCHED:
      return { ...state, searched: action.payload };

    case isAPIready:
      return { ...state, isAPIready: action.payload };

    default:
      return state;
  }
};
