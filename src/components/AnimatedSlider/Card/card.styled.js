import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${props => props.theme.dark.hex()};
  box-shadow: 5px 5px 0px 0px ${props => props.theme.primary.alpha(1)};
  height: 100%;
  margin: 0 auto;
  position: relative;
  transition: box-shadow 300ms ease;
  width: 15rem;

  .image {
    z-index: 99;
    height: 100%;
  }

  .see-more {
    bottom: 0;
    color: ${props => props.theme.dark.hex()};
    position: absolute;
    right: 2rem;
    text-transform: uppercase;
    z-index: 9999;
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
  }

  &:hover .see-more {
    opacity: 0;
  }

  &:hover::after {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    height: 100%;
  }
`;
