import styled from 'styled-components';

export const Menu = styled.div`
  align-items: center;
  background-color: ${props => props.theme.primary.hex()};
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 10vh;
  justify-content: space-around;
  left: 0;
  padding: 0.8rem 1rem;
  position: fixed;
  top: 0;
  transition: min-height 0.3s ease-out;
  z-index: 9999;

  .logo {
    transition: transform 300ms ease;
  }

  &.open {
    min-height: 100vh;

    ul {
      transition: opacity 300ms ease-out;
      opacity: 1;
      height: auto;
    }

    .logo {
      transform: rotate(-90deg);
    }
  }
`;
