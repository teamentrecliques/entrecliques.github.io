import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  height: auto;
  justify-content: space-around;
  min-height: 15rem;
  padding: 2rem 4rem;
  width: 100%;
`;

export const Img = styled.img`
  height: auto;
  margin: 0;
  width: 10em;
`;

export const AddressContainer = styled.div`
  display: flex;
  color: ${props => props.theme.light};
  font-size: 0.8rem;
  line-height: 120%;

  > p {
    padding: 1rem;
    padding-left: 0;
  }
`;

export const SocialContainer = styled.div`
  align-items: center;
  display: flex;
  color: ${props => props.theme.light};
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 120%;

  > a {
    color: inherit;
    padding-right: 0.8rem;
    text-decoration: none;

    > img {
      height: auto;
      margin: 0;
      width: 1.5rem;
    }
  }

  > p {
    margin: 0;
  }
`;
