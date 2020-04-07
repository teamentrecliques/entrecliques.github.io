import React from 'react';
import * as S from './illustrationcontent.styled';

const IllustrationContent = props => {
  return (
    <S.Container>
      <img src={props.image} alt=""/>
    </S.Container>
  );
};

export default IllustrationContent;
