import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as S from './header.styled';

const Header = () => {
  const data = useStaticQuery(graphql`
    query EtcLogo {
      file(relativePath: { eq: "etc-logo.png" }) {
        childImageSharp {
          fixed(width: 348, height: 58) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <S.Header>
      <Img className="logo" fixed={data.file.childImageSharp.fixed} alt="" />
    </S.Header>
  );
};

export default Header;
