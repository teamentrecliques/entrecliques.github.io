import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  transform: rotate(180deg);
  margin-bottom: 20px;
  text-transform: uppercase;
  writing-mode: vertical-lr;
`;

export const Link = styled.a`
  font-size: 2.4vh;
  color: ${props => props.theme.dark.hex()};
  text-decoration: none;
`;
