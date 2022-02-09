import {
  FETCH_QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAIL,
} from "./constants";

export const fetchQuote = () => (dispatch) => {
  dispatch({ type: FETCH_QUOTE_REQUEST });

  const url = "https://type.fit/api/quotes";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: FETCH_QUOTE_SUCCESS, payload: data });
    })
    .catch((err) => dispatch({ type: FETCH_QUOTE_FAIL, payload: err }));
};
