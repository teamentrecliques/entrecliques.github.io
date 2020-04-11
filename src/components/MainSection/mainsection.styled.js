import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Breakpoints from '../../styles/global.breakpoints';

export const MainSection = styled(BackgroundImage)`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  min-height: 768px;
  overflow-x: hidden;
  padding: 4rem 8rem;
  width: 100%;

  @media screen and ${Breakpoints.mobile} {
  }

  @media screen and ${Breakpoints.mobileSm} {
    height: auto;
    flex-direction: column;
    justify-content: space-around;
    min-height: 0;
    padding: 4rem 3rem;
    padding-top: 6rem;

    img {
      display: none;
    }
  }
`;
