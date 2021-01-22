import axios from 'axios';

export const FETCH_QR_START = 'FETCH_QR_START';
export const FETCH_QR_SUCCESS = 'FETCH_QR_SUCCESS';
export const FETCH_QR_FAIL = 'FETCH_QR_FAIL';

export const getQuote = () => (dispatch) => {
  dispatch({ type: FETCH_QR_START });
  axios
    .get(`https://uselessfacts.jsph.pl/random.json?language=en`)
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_QR_SUCCESS, payload: res });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: FETCH_QR_FAIL, payload: error });
    });
};
