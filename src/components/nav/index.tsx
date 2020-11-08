import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useScrollLocation } from '../../hooks';
import { AppBar, Wrapper, Box } from './style';

export default function Nav(): JSX.Element {
  const { savedScroll } = useScrollLocation(document.documentElement.scrollTop);

  const handleScroll = () => {
    savedScroll();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
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
