import styled from 'styled-components';
import { Breakpoints } from '../../styles';

export const Section = styled.div`
  background-color: ${props => props.theme.extra.hex()};
  height: 100vh;
  position: relative;
  width: 100%;

  @media screen and ${Breakpoints.mobileSm} {
    min-height: auto;
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.primary.hex()};
  background-color: ${props => props.theme.dark.hex()};
  font-weight: 300;
  padding: 1rem;
  padding-left: 8rem;
  position: absolute;
  text-transform: uppercase;
  top: 4rem;
  z-index: 999;

  @media screen and ${Breakpoints.mobileSm} {
    padding-left: 3rem;
  }
`;
