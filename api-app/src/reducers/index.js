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
    case FETCH_QR_SUCESS:
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
