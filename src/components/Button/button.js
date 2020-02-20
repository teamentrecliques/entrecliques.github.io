import React from 'react';
import * as S from './styled';

const Button = props => (
  <S.Button>
    <S.ButtonText>{props.children}</S.ButtonText>
  </S.Button>
);

export default Button;
