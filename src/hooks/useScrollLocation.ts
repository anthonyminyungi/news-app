import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setScrollLocation as setNewsScrollLocation } from '../store/news';
import { setScrollLocation } from '../store/saved';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useScrollLocation(location: number) {
  const dispatch = useDispatch();
  const newsScroll = useCallback(
    () => dispatch(setNewsScrollLocation(location)),
    [dispatch, location],
  );
  const savedScroll = useCallback(() => dispatch(setScrollLocation(location)), [
    dispatch,
    location,
  ]);

  return {
    newsScroll,
    savedScroll,
  };
}

export default useScrollLocation;
