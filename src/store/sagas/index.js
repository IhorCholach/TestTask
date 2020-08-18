import actions from '../actions';
import {
  GET_VALUTES,
  GET_SINGLE_VALUTE,
  GET_NEXT_PAGE,
  GET_PREVIOUS_PAGE,
} from '../actions/types';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { valutesRequest, singleValuteRequest } from '../../api';

const {
  getValutesSuccess,
  getValutesFailure,
  getSingleValuteSuccess,
  getSingleValuteFailure,
  getNextPageSuccess,
  getNextPageFailure,
  getPreviousPageSuccess,
  getPreviousPageFailure,
} = actions;

function* getValutesRequest(action) {
  try {
    const data = yield call(valutesRequest, action.payload);
    yield put(getValutesSuccess(data.body.data));
  } catch (err) {
    yield put(getValutesFailure(err));
  }
}

function* getSingleValuteRequest(action) {
  try {
    const data = yield call(singleValuteRequest, action.payload);
    yield put(getSingleValuteSuccess(data.body.data));
  } catch (err) {
    yield put(getSingleValuteFailure(err));
  }
}

function* getNextPageRequest(action) {
  try {
    const data = yield call(valutesRequest, action.payload);
    yield put(getNextPageSuccess(data.body.data));
  } catch (err) {
    yield put(getNextPageFailure(err));
  }
}

function* getPreviousPageRequest(action) {
  try {
    const data = yield call(valutesRequest, action.payload);
    yield put(getPreviousPageSuccess(data.body.data));
  } catch (err) {
    yield put(getPreviousPageFailure(err));
  }
}

export function* rootSaga() {
  yield all([takeEvery(GET_VALUTES, getValutesRequest)]);
  yield all([takeEvery(GET_SINGLE_VALUTE, getSingleValuteRequest)]);
  yield all([takeEvery(GET_NEXT_PAGE, getNextPageRequest)]);
  yield all([takeEvery(GET_PREVIOUS_PAGE, getPreviousPageRequest)]);
}
