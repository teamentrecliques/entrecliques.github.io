import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Breakpoints from '../../styles/global.breakpoints';

export const MainSection = styled(BackgroundImage)`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  min-height: 768px;
  padding: 4rem 6rem;
  overflow: hidden !important;
  width: 100%;

  img {
    animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @media screen and ${Breakpoints.mobile} {
  }

  @media screen and ${Breakpoints.mobileSm} {
    height: auto;
    overflow: hidden !important;
    flex-direction: column;
    justify-content: space-around;
    min-height: 0;
    padding: 4rem 3rem;
    padding-top: 6rem;

    img {
      display: none;
    }
  }

  @keyframes slide-in-right {
    0% {
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
