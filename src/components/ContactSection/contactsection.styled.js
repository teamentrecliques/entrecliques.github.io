import styled from 'styled-components';
import Breakpoints from '../../styles/global.breakpoints';

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  min-height: 2rem;
  width: 100%;

  @media screen and ${Breakpoints.mobileSm} {
    flex-direction: column;
  }
`;

export const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 3px 3px 0px 0px #ccc;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  position: relative;
  transition: all 300ms ease;

  > a {
    color: #131313;
    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 120%;
    text-transform: uppercase;
    text-decoration: none;

    &:visited {
      color: #222;
    }
  }

  &:hover {
    border-color: #ffb320;
    box-shadow: 6px 6px 0px 0px #ffb320;
    margin-right: 0.3rem;
  }

  @media screen and ${Breakpoints.mobileSm} {
    margin-bottom: 0.5rem;
  }
`;

export const HelpText = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 1rem;
  line-height: 140%;
`;

export const QuestionContent = styled.div`
  background-color: ${props => props.theme.dark.alpha(0.8)};
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 2rem;
  width: 60%;
  z-index: 9;

  @media screen and ${Breakpoints.mobileSm} {
    width: 90%;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${props => props.theme.dark.alpha(0.8)};
  border-top: 0;
  min-width: 160px;
  padding-top: 1rem;
  width: 100%;
  z-index: 1;

  button {
    border: 0;
    background-color: transparent;
    color: ${props => props.theme.secondary.hex()};
    cursor: pointer;
    padding: 1rem 16px;
    text-decoration: none;
    outline: none;
    display: block;
    width: 100%;
  }

  button:hover {
    background-color: ${props => props.theme.primary.alpha(0.8)};
  }
`;

export const DropdownButton = styled.button`
  align-items: center;
  justify-content: space-between;
  display: flex;
  border: 0;
  background-color: ${props => props.theme.primary.hex()};
  color: ${props => props.theme.dark.hex()};
  cursor: pointer;
  font-weight: 700;
  font-size: 1.25rem;
  padding: 15px 30px;
  position: relative;
  width: 100%;

  > img {
    margin: 0;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 50%;
  z-index: 99;

  &:hover ${DropdownContent} {
    display: block;
  }

  &:hover ${DropdownButton} {
    color: ${props => props.theme.secondary.hex()};
    background-color: ${props => props.theme.dark.hex()};
  }

  @media screen and ${Breakpoints.mobileSm} {
    width: 90%;
  }
`;

export const FormArea = styled.div`
  align-items: center;
  background-color: ${props => props.theme.gray.hex()};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
  position: relative;
  padding: 4rem 6rem;
  width: 100%;

  @media screen and ${Breakpoints.mobileSm} {
    padding: 1rem;
  }
`;

export const QuestionArea = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 400px;
  position: relative;
  padding: 4rem 6rem;
  width: 100%;
  z-index: 99;

  @media screen and ${Breakpoints.mobileSm} {
    padding: 1rem;
  }
`;

export const Image = styled.img`
  height: auto;
  top: -2rem;
  right: -2rem;
  margin: 0;
  position: absolute;
  top: 1rem;
  width: 50%;
  z-index: 9;

  @media screen and ${Breakpoints.mobileSm} {
    width: 100%;
  }
`;

export const ContactSection = styled.section`
  align-items: flex-start;
  background-color: ${props => props.theme.dark.hex()};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  width: 100%;
`;
