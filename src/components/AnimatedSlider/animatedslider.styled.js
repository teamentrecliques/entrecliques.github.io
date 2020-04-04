import Slider from 'react-animated-slider';
import styled from 'styled-components';

export const CustomSlider = styled(Slider)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  a.previousButton,
  a.nextButton {
    border: 2px solid ${props => props.theme.secondary.hex()};
    font-size: 1rem;
    line-height: 0;
    display: block;
    position: absolute;
    top: 90%;
    transform: translateY(-50%);
    transition: all 0.3s linear;
    z-index: 999;
    color: ${props => props.theme.secondary.hex()};
    text-decoration: none;
    backface-visibility: hidden;
  }

  a.previousButton:not(.disabled):hover,
  a.nextButton:not(.disabled):hover {
    background-color: ${props => props.theme.secondary.alpha(0.5)};
    color: ${props => props.theme.secondary.hex()};
    cursor: pointer;
  }

  a.previousButton {
    left: 6rem;
    padding: 0.5rem 4.5rem 0.5rem 0.5rem;
  }

  a.previousButton.disabled {
    opacity: 0.5;
  }

  a.nextButton {
    padding: 0.5rem 0.5rem 0.5rem 4.5rem;
    left: 12.5rem;
  }

  a.nextButton.disabled {
    opacity: 0.5;
  }

  a>svg>polygon{
    fill: ${props => props.theme.secondary.hex()};
  }

.slide {
  display: flex;
  color: ${props => props.theme.dark.hex()};
  height: 100%;
  padding: 10rem 4rem 4rem 6rem;
  position: absolute;
  overflow: hidden;
  width: 100%;
}

.slide>div {
  width: 50%;
}

.slide.hidden {
  visibility: hidden;
}

.slide.previous {
  left: -100%;
}

.slide.current {
  left: 0;
}

.slide.next {
  left: 100%;
}

.slide.animateIn,
  .slide.animateOut {
  -webkit-transition: all 2s ease;
  transition: all 2s ease;
}

.slide.animateIn.previous,
  .slide.animateIn.next {
  left: 0;
  visibility: visible;
}

.slide.animateOut.previous {
  left: 100%;
}

.slide.animateOut.next {
  left: -100%;
}
`;
