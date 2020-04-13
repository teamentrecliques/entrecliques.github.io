import styled from 'styled-components';

export const Button = styled.button.attrs(props => ({
  "data-anchor": props.anchor,
}))`
  border: 0;
  background-color: ${props => props.theme.highlight.hex()};
  color: ${props => props.theme.secondary.hex()};
  cursor: pointer;
  margin: 15px 10px;
  padding: 15px 30px;
  position: relative;
  transition: transform 150ms ease;
  width: auto;

  &::before {
    content: '';
    border: 3px solid ${props => props.theme.highlight.hex()};
    height: calc(100% + 14px);
    left: -7px;
    position: absolute;
    top: -7px;
    transition: border 300ms ease;
    width: calc(100% + 14px);
  }

  &:hover {
    transform: scale(1.1);
  }

  &:hover::before {
    border: 0;
  }
`;

export const ButtonText = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
`;
