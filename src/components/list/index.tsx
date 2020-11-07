import React, { useEffect } from 'react';

import Card from '../card';
import useNewsFetch from '../../hooks/useNewsFetch';
import { NewsData } from '../../apis';
import { Layout, ContentList, ContentWrapper } from './style';

export default function List(): JSX.Element {
  const { newsState, fetchNewsDispatch } = useNewsFetch();
  useEffect(() => {
    fetchNewsDispatch('');
    console.log(newsState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(newsState);

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
