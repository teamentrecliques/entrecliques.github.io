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

  .logo {
    transition: transform 300ms ease;
  }

  &.open {
    min-height: 100vh;

    ul {
      display: block;
    }

    .logo {
      transform: rotate(-90deg);
    }
  }
`;