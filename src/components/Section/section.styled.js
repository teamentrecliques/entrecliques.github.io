import styled from 'styled-components';

export const Section = styled.div`
  background-color: ${props => props.theme.extra.hex()};
  height: 100vh;
  min-height: 600px;
  position: relative;
  width: 100%;
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
`;
