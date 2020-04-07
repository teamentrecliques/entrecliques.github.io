import React from 'react';
import chroma from 'chroma-js';
import * as S from './textcontent.styled';

const TextContent = props => (
  <S.Container>
    {props.logo != "" && <S.Logo src={props.logo} alt="" />}
    <S.TitleText theme={{ bodycolor: props.bodycolor }}>
      {props.title}
    </S.TitleText>
    <S.BodyText theme={{ titlecolor: props.titlecolor }}>
      {props.children}
    </S.BodyText>
  </S.Container>
);

export default TextContent;
