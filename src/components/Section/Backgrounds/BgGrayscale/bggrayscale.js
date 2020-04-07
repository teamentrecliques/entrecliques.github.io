import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './bggrayscale.styled';

const BgGrayscale = () => {
  const data = useStaticQuery(graphql`
    query ArrowBgImg {
      desktop: file(relativePath: { eq: "arrows-bg.png" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <S.BgGrayscale>
      <BackgroundImage
        Tag="div"
        className="arrows"
        fluid={data.desktop.childImageSharp.fluid}
        backgroundColor="transparent"
      />
    </S.BgGrayscale>
  );
};

export default BgGrayscale;
