import { createReducer } from 'typesafe-actions';

import { fetchNewsAction, increasePage } from './actions';
import { NewsAction, NewsState } from './types';

const initialState: NewsState = { news: [], message: '', page: 0 };

const newsReducer = createReducer<NewsState, NewsAction>(initialState)
  .handleAction(fetchNewsAction.success, (state, action) => {
    return { ...state, news: [...state.news, ...action.payload.news] };
  })
  .handleAction(fetchNewsAction.failure, (state, action) => {
    return { ...state, message: action.payload.message };
  })
  .handleAction(fetchNewsAction.request, (state) => {
    return { ...state };
  })
  .handleAction(increasePage, (state) => {
    return { ...state, page: state.page < 100 ? state.page + 1 : state.page };
  });

export default newsReducer;
