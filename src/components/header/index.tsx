import React, { useCallback } from 'react';
import { debounce } from 'lodash';
import 'font-awesome/css/font-awesome.min.css';
import { useStore } from 'react-redux';

import { Box, InputWrapper, SearchInput, SearchIcon } from './style';
import { useNewsFetch, useSetKeyword } from '../../hooks';

export default function Header(): JSX.Element {
  const { fetchNewsDispatch } = useNewsFetch();
  const { setKeywordDispatch } = useSetKeyword();
  const store = useStore();
  const state = store.getState();

  const debouncedSearch = debounce((word) => {
    fetchNewsDispatch(word, state.news.page);
  }, 1000);

  const handleKeywordChange = useCallback(
    (e) => {
      const { value } = e.target;
      setKeywordDispatch(value);
      debouncedSearch(value);
    },
    [debouncedSearch, setKeywordDispatch],
  );

  return (
    <Box>
      <InputWrapper>
        <SearchInput
          type="text"
          placeholder="Search news"
          onChange={handleKeywordChange}
        />
        <SearchIcon className="fa fa-search fa-lg" />
      </InputWrapper>
    </Box>
  );
}
