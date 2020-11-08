import React, { useEffect } from 'react';
import { useStore } from 'react-redux';

import Card from '../card';
import { useNewsFetch, useNextPage } from '../../hooks';
import { NewsData } from '../../apis';
import { Layout, ContentList, ContentWrapper } from './style';

function List(): JSX.Element {
  const { newsState, fetchNewsDispatch } = useNewsFetch();
  const { page, nextPage } = useNextPage();
  const store = useStore();
  const state = store.getState();

  useEffect(() => {
    if (state.news.news.length === 0) {
      fetchNewsDispatch(state.news.keyword, state.news.page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (!state.news.loading && scrollTop + clientHeight >= scrollHeight) {
      nextPage();
      fetchNewsDispatch(state.news.keyword, page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Layout>
      <ContentWrapper>
        <ContentList>
          {newsState.map((news: NewsData) => {
            // eslint-disable-next-line no-underscore-dangle
            return <Card key={news._id} news={news} />;
          })}
        </ContentList>
      </ContentWrapper>
    </Layout>
  );
}

export default React.memo(List);
