import styled from 'styled-components';
import Breakpoints from '../../../styles/global.breakpoints';

export const CardDesc = styled.div`
  border-radius: 5px;
  background: #ffb320;
  color: #131313;
  opacity: 0;
  line-height: 120%;
  margin-bottom: 0.25rem;
  margin-right: 1.25rem;
  padding: 0.5rem;
  position: absolute;
  right: 100%;
  top: -70%;
  transition: opacity 300ms ease;
  width: 10rem;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 30%;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-left-color: #ffb320;
    border-right: 0;
    margin-top: -16px;
    margin-right: -16px;
  }

  @media screen and ${Breakpoints.mobileSm} {
    display: none;
  }
`;

export const CardItem = styled.div`
  background-color: #fff;
  box-shadow: 3px 3px 0px 0px #ccc;
  opacity: 0;
  pointer-events: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0.25rem 0;
  padding: 0.5rem 1rem;
  position: relative;
  transition: all 300ms ease;

  > a {
    color: #131313;
    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 120%;
    text-transform: uppercase;
    text-decoration: none;

    &:visited {
      color: #222;
    }
  }

  &:hover {
    border-color: #ffb320;
    box-shadow: 6px 6px 0px 0px #ffb320;
    margin-right: 0.3rem;

    ${CardDesc} {
      opacity: 1;
    }
  }
`;

export const CardContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1rem;
  position: absolute;
  width: 100%;
  z-index: 9999;
`;

export const SeeMore = styled.p`
  bottom: 0;
  color: ${props => props.theme.dark.hex()};
  position: absolute;
  right: 2rem;
  text-transform: uppercase;
  z-index: 9999;
`;

export const Card = styled.div`
  background-color: ${props => props.theme.dark.hex()};
  box-shadow: 5px 5px 0px 0px ${props => props.theme.primary.alpha(1)};
  height: 100%;
  margin: 0 auto;
  position: relative;
  transition: box-shadow 300ms ease;
  max-width: 25rem;

  .image {
    z-index: 99;
    height: 100%;
  }

  &:after {
    clip-path: polygon(0 50%, 100% 0, 100% 100%, 0% 100%);
    background-color: ${props => props.theme.secondary.hex()};
    bottom: 0;
    content: '';
    height: 25%;
    position: absolute;
    transition: height 300ms ease, clip-path 300ms ease;
    width: 100%;
    z-index: 999;
  }

  &:hover {
    box-shadow: 20px 20px 0px 0px ${props => props.theme.primary.alpha(1)};

    ${SeeMore} {
      opacity: 0;
    }

    ${CardItem} {
      opacity: 1;
      pointer-events: auto;
    }
  }

  &:hover::after {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    height: 100%;
    opacity: 0.9;
  }

  @media screen and ${Breakpoints.mobileSm} {
    height: 10rem;
    width: 100%;

    &:after {
      height: 50%;
    }
  }
`;
