import { takeEvery, call, put } from 'redux-saga/effects';

import { fetchNewsData } from '../apis';
import * as constants from '../constants';
import { Request } from './reducers';

interface WorkerActionType {
  type: string;
  payload: Request;
}

function* fetchWorker(action: WorkerActionType) {
  try {
    const news = yield call(fetchNewsData, action.payload.keyword);
    yield put({
      type: constants.FETCH_NEWS_SUCCESS,
      payload: { news: news.response.docs },
    });
  } catch (e) {
    yield put({
      type: constants.FETCH_NEWS_FAILURE,
      payload: { message: e.message },
    });
  }
}

export default function* sagas(): Generator {
  yield takeEvery(constants.FETCH_NEWS_REQUEST, fetchWorker);
}
