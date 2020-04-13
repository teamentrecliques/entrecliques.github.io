import styled from 'styled-components';
import loader from '../../../images/loader.svg';

export const Loader = styled.div`
  background: no-repeat url(${loader}) center;
  background-color: ${props => props.theme.dark.alpha(0.8)};
  height: 100vh;
  left: 0;
  opacity: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100vw;
  visibility: hidden;
  z-index: 999999;

  &.--visible {
    opacity: 1;
    visibility: visible;
  }
`;
