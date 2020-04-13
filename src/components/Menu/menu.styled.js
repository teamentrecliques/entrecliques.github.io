import styled from 'styled-components';
import { Breakpoints } from '../../styles';

export const Menu = styled.div`
  align-items: center;
  background-color: ${props => props.theme.primary.hex()};
  box-shadow: 5px 5px 10px -2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 10vh;
  justify-content: space-around;
  left: 0;
  padding: 0.8rem 1rem;
  position: fixed;
  top: 0;
  transition: all 0.3s ease-out;
  z-index: 9999;

  .logo {
    transition: transform 300ms ease;
  }

  &.open {
    min-height: 100vh;

    ul {
      transition: all 300ms ease-out;
      opacity: 1;
      height: auto;
    }

    .logo {
      transform: rotate(-90deg);
    }
  }

  @media screen and ${Breakpoints.mobileSm} {
    display: none;
  }
`;
