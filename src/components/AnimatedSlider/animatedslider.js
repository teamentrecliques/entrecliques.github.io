import React, { useState } from 'react';
import chroma from 'chroma-js';
import * as S from './animatedslider.styled';

const AnimatedSlider = props => {
  const [activeSlider, setActiveSlider] = useState(0);

  return (
    <S.SliderContainer>
      <S.CustomSlider
        theme={{ main: chroma(props.color) }}
        onSlideChange={event => setActiveSlider(event.slideIndex)}
        duration="800"
        touchDisabled="true"
      >
        {props.children}
      </S.CustomSlider>
      <S.NavigationDotsContainer>
        {props.data.map((slide, index) => (
          <S.NavDots
            key={index}
            className={index === activeSlider ? 'active' : ''}
          />
        ))}
      </S.NavigationDotsContainer>
    </S.SliderContainer>
  );
}

export default AnimatedSlider;
