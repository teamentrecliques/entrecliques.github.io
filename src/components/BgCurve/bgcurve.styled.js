import styled from 'styled-components';
import svg from '../../images/curve.svg';

export const BgCurve = styled.div`
  background-image: url(${svg});
  background-size: 100% 100%;
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
`;
