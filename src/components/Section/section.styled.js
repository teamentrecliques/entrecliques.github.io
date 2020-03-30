import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

export const Section = styled(BackgroundImage)`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  min-height: 768px;
  padding: 4rem;
  width: 100%;

  &.main {
    padding: 4rem 8rem;
  }
`;
