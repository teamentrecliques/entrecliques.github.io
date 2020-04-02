import React from 'react';
import * as S from './animatedslider.styled';

const AnimatedSlider = props => (
  <S.CustomSlider onSlideChange={event => console.log(event.slideIndex)}>
    {props.children}
  </S.CustomSlider>
);

export default AnimatedSlider;
