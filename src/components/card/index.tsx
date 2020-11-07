import React, { SyntheticEvent } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import {
  CardWrapper,
  Background,
  TextWrapper,
  Title,
  Description,
  MetaInfo,
  StarIcon,
} from './style';
import { NewsData, Multimedia } from '../../apis';
import * as utils from '../../utils';

type CardProp = {
  news: NewsData;
};

const getImg = (media: Multimedia[]) => {
  const imgUrl = media.filter((m) => m.subType === 'mediumThreeByTwo225')[0]
    .url;
  return `https://static01.nyt.com/${imgUrl}?quality=75&auto=webp&disable=upscale`;
};

export default function Card({ news }: CardProp): JSX.Element {
  const cardClickHandler = () => {
    window.open(news.web_url);
  };

  const startClickHandler = (e: SyntheticEvent<Element>) => {
    e.stopPropagation();
    console.log('star!!');
  };

  return (
    <CardWrapper>
      <Background
        className="thumbnail"
        images={news.multimedia}
        onClick={cardClickHandler}
      />

      <TextWrapper onClick={cardClickHandler}>
        <Title>{news.headline.main}</Title>
        <Description>{news.lead_paragraph}</Description>
        <MetaInfo onClick={(e) => e.stopPropagation()}>
          {`${utils.default.formatDate(news.pub_date)} | 
          ${news.byline.original}`}
          <StarIcon className="fa fa-star" onClick={startClickHandler} />
        </MetaInfo>
      </TextWrapper>
    </CardWrapper>
  );
}
