import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import Header from '../header';

import * as S from './index.styled';

import { GlobalStyle, DefaultTheme } from '../../styles';

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <S.Container>
        <main>{children}</main>
      </S.Container>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
