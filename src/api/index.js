import superagent from 'superagent';
import { API_URL } from './config';

export const valutesRequest = (params) =>
  superagent.get(API_URL).query(params).set('Accept', 'application/json');

export const singleValuteRequest = (params) =>
  superagent.get(API_URL).query(params).set('Accept', 'application/json');
