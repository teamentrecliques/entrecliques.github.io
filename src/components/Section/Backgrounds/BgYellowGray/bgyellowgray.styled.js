import styled from 'styled-components';

export const Background = styled.div`
  background-color: ${props => props.theme.primary.hex()};
  top: 0;
  height: 100vh;
  min-height: 600px;
  position: absolute;
  width: 100%;
  z-index: 0;

  &:after {
    background-color: ${props => props.theme.dark.hex()};
    content: '';
    position: absolute;
    right: 0;
    width: 49vw;
    overflow: hidden;
    z-index: 0;
    height: 100%;
  }
`;
