import { FETCH_QR_START, FETCH_QR_SUCCESS, FETCH_QR_FAIL } from '../actions';

const initialState = {
  quote: '',
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QR_START:
      return {
        ...state,
        quote: '',
        isFetching: true,
        error: ''
      };
    case FETCH_QR_SUCCESS:
      return {
        ...state,
        quote: action.payload.data.text,
        isFetching: false,
        error: ''
      };
    case FETCH_QR_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
