import React from 'react';
import * as S from './textcontent.styled';
import chroma from 'chroma-js';

const TextContent = props => (
  <S.Container>
    <S.TitleText theme={{ bodycolor: props.bodycolor }}>{props.title}</S.TitleText>
    <S.BodyText theme={{ titlecolor: props.titlecolor}}>{props.children}</S.BodyText>
  </S.Container>
);

export default TextContent;
