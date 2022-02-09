import {
  FETCH_QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAIL,
} from "./constants";

const initialState = {
  quote: "",
  author: "",
  isLoading: false,
  error: "",
};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_REQUEST:
      return { ...state, isLoading: true, error: "" };

    case FETCH_QUOTE_SUCCESS:
      const random = Math.floor(Math.random() * 1642);
      const quote = action.payload[random].text;
      const author = action.payload[random].author;

      return { ...state, isLoading: false, quote: quote, author: author };

    case FETCH_QUOTE_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
