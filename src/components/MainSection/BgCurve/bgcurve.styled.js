import styled from 'styled-components';
import svg from '../../../images/curve.svg';

export const BgCurve = styled.div`
  background-image: url(${svg});
  background-size: 102% 102%;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  left: 0;
  min-height: 768px;
  min-width: 1200px;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: -1;

  @media screen and (max-width: 1079px) {
    display: none;
  }
`;
