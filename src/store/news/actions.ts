import { createAction, createAsyncAction } from 'typesafe-actions';

import { NewsData } from '../../apis';

export interface Request {
  keyword: string;
}

interface Response {
  news: NewsData[];
}

interface Error {
  message: string;
}

export const FETCH_NEWS_REQUEST = 'news/FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'news/FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'news/FETCH_NEWS_FAILURE';
export const INCREASE_PAGE = 'news/INCREASE_PAGE';

export const fetchNewsAction = createAsyncAction(
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
)<Request, Response, Error>();

export const increasePage = createAction(INCREASE_PAGE)();
