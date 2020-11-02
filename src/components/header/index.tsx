import React, { useCallback } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import { Box, InputWrapper, SearchInput, SearchIcon } from './style';

export default function Header(): JSX.Element {
  return (
    <Box>
      <InputWrapper>
        <SearchInput type="text" placeholder="Search news" />
        <SearchIcon className="fa fa-search fa-lg" />
      </InputWrapper>
    </Box>
  );
}
