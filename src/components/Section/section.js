import React from 'react';
import * as S from './section.styled';

const Section = props => {
  return (
    <S.Section id={props.id}>
      <S.Title>{props.title}</S.Title>
      {props.children}
    </S.Section>
  );
}

export default Section;
