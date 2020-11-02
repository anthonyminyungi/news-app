import React from 'react';

import {
  CardWrapper,
  Background,
  Logo,
  TextWrapper,
  Title,
  Description,
  Label,
  LabelContent,
  LabelWrapper,
} from './style';
import { NewsData, Multimedia } from '../../apis';

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
  return (
    <CardWrapper>
      <Background className="thumbnail" onClick={cardClickHandler}>
        {news.multimedia.length === 0 ? (
          <></>
        ) : (
          <img src={getImg(news.multimedia)} alt="news-multimedia" />
        )}
      </Background>
      <TextWrapper onClick={cardClickHandler}>
        <Title>{news.headline.main}</Title>
        <Description>
          {news.abstract.length >= 100
            ? `${news.lead_paragraph.substr(0, 100)} ...more`
            : news.abstract}
        </Description>
      </TextWrapper>
      <LabelWrapper>
        <LabelContent>
          <Label>icon</Label>
        </LabelContent>
      </LabelWrapper>
    </CardWrapper>
  );
}
