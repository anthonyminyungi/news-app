import axios from 'axios';

export interface NewsData {
  id: number;
  title: string;
  logo_file_url: string;
}

const API_KEY = 'wTwRh7Blb0nUPWPWvHQCWVupJSoQBqeu';

export const fetchNewsData = async (keyword = ''): Promise<NewsData> => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${API_KEY}`,
  );
  if (response.statusText !== 'OK') {
    throw new Error(response.statusText);
  }
  return response.data as Promise<NewsData>;
};
