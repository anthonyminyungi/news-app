import React, { useEffect } from 'react';
import { useStore } from 'react-redux';

import Card from '../card';
import useNewsFetch from '../../hooks/useNewsFetch';
import { NewsData } from '../../apis';
import { Layout, ContentList, ContentWrapper } from './style';

export default function List(): JSX.Element {
  const { newsState, fetchNewsDispatch } = useNewsFetch();
  const store = useStore();
  const state = store.getState();

  useEffect(() => {
    fetchNewsDispatch(state.news.keyword, state.news.page);
    console.log(newsState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <ContentWrapper>
        <ContentList>
          {newsState.map((news: NewsData) => {
            // eslint-disable-next-line no-underscore-dangle
            return <Card key={news.web_url} news={news} />;
          })}
        </ContentList>
      </ContentWrapper>
    </Layout>
  );
}
