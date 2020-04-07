import styled from 'styled-components';

export const BgGrayscale = styled.div`
  background: linear-gradient(337.55deg, #141414 0%, #2b2b2b 100%);
  top: 0;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: 0;

  .arrows {
    animation: 3s infinite alternate fade;
    height: 100%;
    margin-left: 50vw;
    width: 50vw;
  }

  @keyframes fade {
    from {
      opacity: 0.2;
    }

    60% {
      opacity: 1;
    }

    to {
      opacity: 0.2;
    }
  }
`;
