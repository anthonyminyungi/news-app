import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import Card from '../card';
import { useNewsFetch, useNextPage } from '../../hooks';
import { NewsData } from '../../apis';
import { Layout, ContentList, ContentWrapper } from './style';
import { RootState } from '../../store';

function List(): JSX.Element {
  const { newsState, fetchNewsDispatch } = useNewsFetch();
  const { page, nextPage } = useNextPage();
  const news = useSelector((state: RootState) => state.news);

  useEffect(() => {
    if (news.news.length === 0) {
      fetchNewsDispatch(news.keyword, news.page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (!news.loading && scrollTop + clientHeight >= scrollHeight) {
      nextPage();
      fetchNewsDispatch(news.keyword, page + 1);
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
          {newsState.map((article: NewsData) => {
            // eslint-disable-next-line no-underscore-dangle
            return <Card key={article._id} news={article} />;
          })}
        </ContentList>
      </ContentWrapper>
    </Layout>
  );
}

export default React.memo(List);
