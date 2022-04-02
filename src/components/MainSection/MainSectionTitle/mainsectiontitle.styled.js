import styled from 'styled-components';

export const Container = styled.div`
  max-width: 48rem;
  text-transform: uppercase;

  > p {
    margin-bottom: 0.2em;
  }

`;

export const TopText = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 1.4rem;
  font-weight: 300;
`;

export const StrongText = styled.p`
  color: ${props => props.theme.primary};
  font-size: 4rem;
  font-weight: 700;

  @media screen and (max-width: 1079px) {
    font-size: 3.5rem;
  }

  &.secondary {
    color: ${props => props.theme.secondary};
  }
`;

export const MidText = styled.p`
  color: ${props => props.theme.primary};
  font-size: 3rem;
  font-weight: 700;

  @media screen and (max-width: 1079px) {
    font-size: 2.5rem;
  }

  &.secondary {
    color: ${props => props.theme.secondary};
  }
`;

export const RegularText = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 4rem;
  font-weight: 400;

  @media screen and (max-width: 1079px) {
    font-size: 3.5rem;
  }
`;

export const SmallText = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 3rem;
  font-weight: 400;

  @media screen and (max-width: 1079px) {
    font-size: 2.5rem;
  }
`;