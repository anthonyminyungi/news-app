import axios from 'axios';

type Headline = {
  main: string;
};

type Byline = {
  origination: null;
  original: string;
};

export interface Multimedia {
  subType: string;
  url: string;
}

export interface NewsData {
  web_url: string;
  headline: Headline;
  abstract: string;
  multimedia: Multimedia[];
  lead_paragraph: string;
  pub_date: string;
  byline: Byline;
}

const API_KEY = 'M9hnOF0e6SM1BMMKqCobX4muvOHXYGu0';

export const fetchNewsData = async (keyword = ''): Promise<NewsData> => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${API_KEY}`,
  );
  if (response.statusText !== 'OK') {
    throw new Error(response.statusText);
  }
  return response.data as Promise<NewsData>;
};
