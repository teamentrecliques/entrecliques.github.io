import styled from 'styled-components';

export const Background = styled.div`
  background-color: ${props => props.theme.dark.hex()};
  bottom: 0;
  height: 30vh;
  position: absolute;
  width: 100%;
`;
