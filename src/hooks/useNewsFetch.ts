import { useSelector, useDispatch } from 'react-redux';

import { fetchNewsAction } from '../store/news';
import { RootState } from '../store';
import { NewsData } from '../apis';

interface UseNewsFetchType {
  newsState: NewsData[];
  fetchNewsDispatch: (keyword: string) => void;
}

function useNewsFetch(): UseNewsFetchType {
  const dispatch = useDispatch();
  const newsState = useSelector((store: RootState) => store.news).news;

  const fetchNewsDispatch = (keyword: string): void => {
    dispatch(fetchNewsAction.request({ keyword }));
  };

  return {
    newsState,
    fetchNewsDispatch,
  };
}

export default useNewsFetch;
