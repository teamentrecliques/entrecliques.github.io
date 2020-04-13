import styled from 'styled-components';
import Breakpoints from '../../styles/global.breakpoints';

export const Header = styled.header`
  position: absolute;
  margin: 2rem 2rem 3rem 8rem;
  width: 20rem;
  z-index: 999;

  @media screen and ${Breakpoints.mobile} {
    margin: 2rem;
    margin-left: 8rem;
  }

  @media screen and ${Breakpoints.mobileSm} {
    margin-left: 3rem;
    width: 50%;

    .logo {
      width: 10rem;
    }
  }
`;
