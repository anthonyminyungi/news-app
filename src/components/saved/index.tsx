import React from 'react';

import { useSelector } from 'react-redux';
import Card from '../card';
import { NewsData } from '../../apis';
import { Layout, ContentList, ContentWrapper } from '../list/style';
import { RootState } from '../../store';

export default function SavedList(): JSX.Element {
  const { saved } = useSelector((state: RootState) => state.saved);

  return (
    <Layout>
      <ContentWrapper>
        <ContentList>
          {saved.length === 0 ? (
            <div>There is no saved news</div>
          ) : (
            saved.map((news: NewsData) => {
              return <Card key={news.web_url} news={news} />;
            })
          )}
        </ContentList>
      </ContentWrapper>
    </Layout>
  );
}
