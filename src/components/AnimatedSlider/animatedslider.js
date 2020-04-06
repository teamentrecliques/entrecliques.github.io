import React from 'react';
import chroma from 'chroma-js';
import * as S from './animatedslider.styled';

const AnimatedSlider = props => (
  <S.CustomSlider
    theme={{ secondary: chroma(props.color), textcolor: chroma(props.textcolor) }}
    onSlideChange={event => console.log(event.slideIndex)}
  >
    {props.children}
  </S.CustomSlider>
);

export default AnimatedSlider;
