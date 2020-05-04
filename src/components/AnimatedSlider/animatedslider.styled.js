import Slider from 'react-animated-slider';
import styled from 'styled-components';
import Breakpoints from '../../styles/global.breakpoints';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CustomSlider = styled(Slider)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 9999;

  a.previousButton,
  a.nextButton {
    border: 2px solid ${props => props.theme.main.hex()};
    font-size: 1rem;
    line-height: 0;
    display: block;
    position: absolute;
    top: 90%;
    transform: translateY(-50%);
    transition: all 0.3s linear;
    color: ${props => props.theme.main.hex()};
    text-decoration: none;
    backface-visibility: hidden;
    z-index: 999;
  }

  a.previousButton:not(.disabled):hover,
  a.nextButton:not(.disabled):hover {
    background-color: ${props => props.theme.main.alpha(0.5)};
    color: ${props => props.theme.main.hex()};
    cursor: pointer;
  }

  a.previousButton {
    left: 6rem;
    padding: 0.5rem 4.5rem 0.5rem 0.5rem;
  }

  a.nextButton {
    padding: 0.5rem 0.5rem 0.5rem 4.5rem;
    left: 12.5rem;
  }

  a.previousButton.disabled,
  a.nextButton.disabled {
    opacity: 0.5;
  }

  a > svg > polygon {
    fill: ${props => props.theme.main.hex()};
  }

  .slide {
    display: flex;
    height: 100%;
    padding: 10rem 4rem 4rem 6rem;
    position: absolute;
    overflow: hidden;
    width: 100%;

    > div {
      width: 50%;
      padding: 1rem;
    }
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
    -webkit-transition: all 800ms ease;
    transition: all 800ms ease;
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

  @media screen and ${Breakpoints.mobileSm} {
    a.previousButton {
      left: 20%;
      padding: 0.5rem 4.5rem 0.5rem 0.5rem;
    }

    a.nextButton {
      padding: 0.5rem 0.5rem 0.5rem 4.5rem;
      left: 52%;
    }

    .slide {
      padding: 9rem 2rem 4rem 2rem;
      flex-direction: column;

      > div {
        width: 100%;
        padding: 0;
      }
    }
  }
`;

export const NavigationDotsContainer = styled.div`
  align-items: center;
  display: flex;
  height: 3rem;
  justify-content: flex-start;
  left: 20rem;
  padding: 0 1rem;
  position: absolute;
  top: 85.5%;
  width: auto;
  z-index: 999;

  @media screen and ${Breakpoints.mobileSm} {
    display: none;
  }
`;

export const NavDots = styled.div`
  background-color: #fff;
  border-radius: 50%;
  height: 1rem;
  margin: 0 0.5rem;
  transition: all 300ms ease;
  width: 1rem;

  &.active {
    background-color: #ffb320;
    border-radius: 0.5rem;
    width: 2rem;
  }
`;
