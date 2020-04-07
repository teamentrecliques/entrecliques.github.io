import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1rem;
  line-height: 120%;
`;

export const BodyText = styled.p`
  color: ${props => props.theme.titlecolor};
  font-weight: 300;
`;

export const TitleText = styled.h3`
  color: ${props => props.theme.bodycolor};
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Logo = styled.img`
  height: auto;
  width: 50%;
`;
