import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Wrapper, Box } from './style';

export default function Nav(): JSX.Element {
  return (
    <AppBar>
      <Wrapper>
        <Box>
          <Link style={{ color: 'black', textDecoration: 'none' }} to="/">
            News
          </Link>
        </Box>
        <Box>
          <Link style={{ color: 'black', textDecoration: 'none' }} to="/saved">
            Saved
          </Link>
        </Box>
      </Wrapper>
    </AppBar>
  );
}
