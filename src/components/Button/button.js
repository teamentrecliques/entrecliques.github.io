import React from 'react';
import * as S from './button.styled';

const Button = props => (
  <S.Button data-anchor={props.anchor}>
    <S.ButtonText>{props.children}</S.ButtonText>
  </S.Button>
);

export default Button;
