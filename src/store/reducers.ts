import { ActionType, createReducer, createAsyncAction } from 'typesafe-actions';

import { NewsData } from '../apis';
import * as constants from '../constants';

export interface Request {
  keyword: string;
}

interface Response {
  news: NewsData[];
}

interface Error {
  message: string;
}

export const fetchNewsAction = createAsyncAction(
  constants.FETCH_NEWS_REQUEST,
  constants.FETCH_NEWS_SUCCESS,
  constants.FETCH_NEWS_FAILURE,
)<Request, Response, Error>();

const actions = {
  fetchNewsAction,
};

type Actions = ActionType<typeof actions>;
type State = { news: NewsData[]; message: string };

const initialState: State = { news: [], message: '' };

const reducer = createReducer<State, Actions>(initialState)
  .handleAction(fetchNewsAction.success, (state, action) => {
    return { ...state, news: action.payload.news };
  })
  .handleAction(fetchNewsAction.failure, (state, action) => {
    return { ...state, message: action.payload.message };
  })
  .handleAction(fetchNewsAction.request, (state) => {
    return { ...state };
  });

export default reducer;
