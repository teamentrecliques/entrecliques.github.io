import styled from 'styled-components';
import Breakpoints from '../../styles/global.breakpoints';

export const Footer = styled.footer`
  display: flex;
  height: auto;
  justify-content: space-around;
  min-height: 15rem;
  padding: 4rem;
  width: 100%;

  > div {
    align-items: flex-start;
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    width: 50%;
  }

  @media screen and ${Breakpoints.mobileSm} {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    overflow-x: hidden;
    padding: 2rem 1rem;

    > div {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 90%;
    }
  }
`;

export const Img = styled.img`
  height: auto;
  margin: 0;
  margin-top: 1rem;
  width: 10rem;

  @media screen and ${Breakpoints.mobileSm} {
    margin-bottom: 1rem;
  }
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

  @media screen and ${Breakpoints.mobileSm} {
    flex-direction: column;
    justify-content: flex-start;

    p {
      padding: 0;
      margin-bottom: 1rem;
    }
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

  @media screen and ${Breakpoints.mobileSm} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 2rem;

    > a {
      padding: 0;
      grid-column: span 1;
      margin: 0 auto;
      margin-bottom: 1rem;
    }

    > p {
      margin: 0 auto;
      grid-column: span 4;
    }
  }
`;

export const MapContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  width: 100%;
`;

export const MapIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  border: 0;

  @media screen and ${Breakpoints.mobileSm} {
    height: 100%;
  }
`;
