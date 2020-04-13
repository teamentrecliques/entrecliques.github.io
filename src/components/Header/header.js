import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as S from './header.styled';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "etc-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 348, quality: 100) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
    }
  `);

  return (
    <S.Header>
      <Img className="logo" fluid={data.file.childImageSharp.fluid} alt="" />
    </S.Header>
  );
};

export default Header;
