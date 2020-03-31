import styled from 'styled-components';

export const Text = styled.p`
  color: ${props => props.theme.secondary.hex()};
  font-size: 1.2rem;
  line-height: 120%;
  max-width: 20rem;
`;
