import { FETCH_QR_START, FETCH_QR_SUCCESS, FETCH_QR_FAIL } from './..actions';

const initialState = {
  url: '',
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QR_START:
      return {
        ...state,
        url: '',
        isFetching: true,
        error: ''
      };
    case FETCH_QR_SUCCESS:
      return {
        ...state,
        url: action.payload,
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
