import {
  GET_VALUTES,
  GET_VALUTES_SUCCESS,
  GET_VALUTES_FAILURE,
  GET_SINGLE_VALUTE,
  GET_SINGLE_VALUTE_SUCCESS,
  GET_SINGLE_VALUTE_FAILURE,
  GET_NEXT_PAGE,
  GET_NEXT_PAGE_SUCCESS,
  GET_NEXT_PAGE_FAILURE,
  GET_PREVIOUS_PAGE,
  GET_PREVIOUS_PAGE_SUCCESS,
  GET_PREVIOUS_PAGE_FAILURE,
  SET_ID,
} from './types';

const getValutes = (payload) => {
  return {
    type: GET_VALUTES,
    payload,
  };
};

const getValutesSuccess = (payload) => {
  return {
    type: GET_VALUTES_SUCCESS,
    payload,
  };
};

const getValutesFailure = (payload) => {
  return {
    type: GET_VALUTES_FAILURE,
    payload,
  };
};

const getSingleValute = (payload) => {
  return {
    type: GET_SINGLE_VALUTE,
    payload,
  };
};

const getSingleValuteSuccess = (payload) => {
  return {
    type: GET_SINGLE_VALUTE_SUCCESS,
    payload,
  };
};

const getSingleValuteFailure = (payload) => {
  return {
    type: GET_SINGLE_VALUTE_FAILURE,
    payload,
  };
};

const getNextPage = (payload) => {
  return {
    type: GET_NEXT_PAGE,
    payload,
  };
};

const getNextPageSuccess = (payload) => {
  return {
    type: GET_NEXT_PAGE_SUCCESS,
    payload,
  };
};

const getNextPageFailure = (payload) => {
  return {
    type: GET_NEXT_PAGE_FAILURE,
    payload,
  };
};

const getPreviousPage = (payload) => {
  return {
    type: GET_PREVIOUS_PAGE,
    payload,
  };
};

const getPreviousPageSuccess = (payload) => {
  return {
    type: GET_PREVIOUS_PAGE_SUCCESS,
    payload,
  };
};

const getPreviousPageFailure = (payload) => {
  return {
    type: GET_PREVIOUS_PAGE_FAILURE,
    payload,
  };
};

const setId = (payload) => {
  return {
    type: SET_ID,
    payload,
  };
};

export default {
  getValutes,
  getValutesSuccess,
  getValutesFailure,
  getSingleValute,
  getSingleValuteSuccess,
  getSingleValuteFailure,
  getNextPage,
  getNextPageSuccess,
  getNextPageFailure,
  getPreviousPage,
  getPreviousPageSuccess,
  getPreviousPageFailure,
  setId,
};
