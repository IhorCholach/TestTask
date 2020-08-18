import {
  GET_SINGLE_VALUTE,
  GET_SINGLE_VALUTE_SUCCESS,
  GET_SINGLE_VALUTE_FAILURE,
  SET_ID,
} from '../actions/types';

const initialState = {
  valute: [],
  loading: false,
  error: [],
  id: null,
};

const singleValute = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID: {
      return {
        ...state,
        id: action.payload,
      };
    }
    case GET_SINGLE_VALUTE: {
      return {
        ...state,
        loading: true,
        errors: [],
      };
    }
    case GET_SINGLE_VALUTE_SUCCESS: {
      return {
        ...state,
        loading: false,
        valute: action.payload,
        errors: [],
      };
    }
    case GET_SINGLE_VALUTE_FAILURE: {
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default singleValute;
