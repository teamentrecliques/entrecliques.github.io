import React from 'react';
import * as S from './button.styled';

const Button = props => {
  return (
    <S.Button anchor={props.anchor}>
      <S.ButtonText>{props.children}</S.ButtonText>
    </S.Button>
  );
}

export default Button;
