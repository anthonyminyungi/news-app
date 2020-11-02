import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../card';
import { NewsData } from '../../apis';
import { Layout, ContentList, ContentWrapper } from './style';

const API_KEY = 'M9hnOF0e6SM1BMMKqCobX4muvOHXYGu0';

export default function List(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [newsList, setNewsList] = useState([]);

  const fetch = async () => {
    setLoading(true);

    await axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=${API_KEY}&page=0`,
      )
      .then((response) => {
        const fetchedData = response.data.response.docs;
        console.log(fetchedData);
        const mergedData = newsList.concat(...fetchedData);
        setNewsList(mergedData);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });

    setLoading(false);
  };

  useEffect(() => {
    fetch();
    console.log(newsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <ContentWrapper>
        <ContentList>
          {newsList.map((news: NewsData) => {
            // eslint-disable-next-line no-underscore-dangle
            return <Card key={news.web_url} news={news} />;
          })}
        </ContentList>
      </ContentWrapper>
    </Layout>
  );
}
