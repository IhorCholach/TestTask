import {
  GET_VALUTES,
  GET_VALUTES_SUCCESS,
  GET_VALUTES_FAILURE,
  GET_NEXT_PAGE,
  GET_NEXT_PAGE_SUCCESS,
  GET_NEXT_PAGE_FAILURE,
  GET_PREVIOUS_PAGE,
  GET_PREVIOUS_PAGE_SUCCESS,
  GET_PREVIOUS_PAGE_FAILURE,
} from '../actions/types';

const initialState = {
  valutes: [],
  loading: false,
  errors: [],
  start: 1,
  limit: 20,
};

const valutes = (state = initialState, action) => {
  switch (action.type) {
    case GET_VALUTES: {
      return {
        ...state,
        loading: true,
        errors: [],
      };
    }
    case GET_VALUTES_SUCCESS: {
      return {
        ...state,
        valutes: action.payload,
        loading: false,
        errors: [],
      };
    }
    case GET_VALUTES_FAILURE: {
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    }
    case GET_NEXT_PAGE: {
      return {
        ...state,
        loading: true,
        errors: [],
      };
    }
    case GET_NEXT_PAGE_SUCCESS: {
      return {
        ...state,
        loading: false,
        valutes: action.payload,
        start: state.start + action.payload.length,
      };
    }
    case GET_NEXT_PAGE_FAILURE: {
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    }
    case GET_PREVIOUS_PAGE: {
      return {
        ...state,
        loading: true,
        errors: [],
      };
    }
    case GET_PREVIOUS_PAGE_SUCCESS: {
      return {
        ...state,
        loading: false,
        valutes: action.payload,
        start: state.start - action.payload.length,
      };
    }
    case GET_PREVIOUS_PAGE_FAILURE: {
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    }
    default:
      return state;
  }
};
export default valutes;
