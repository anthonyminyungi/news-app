import React, { useState } from 'react';
import axios from 'axios';

import Card from '../card';
import { NewsData } from '../../apis';
import { Layout, ContentList, ContentWrapper } from '../list/style';

export default function SavedList(): JSX.Element {
  const [savedList, setSavedList] = useState([]);

  return (
    <Layout>
      <ContentWrapper>
        <ContentList>
          {savedList.length === 0 ? (
            <div>There is no saved news</div>
          ) : (
            savedList.map((news: NewsData) => {
              return <Card key={news.web_url} news={news} />;
            })
          )}
        </ContentList>
      </ContentWrapper>
    </Layout>
  );
}
