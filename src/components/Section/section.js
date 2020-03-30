import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import * as S from './section.styled';

const Section = props => {
  const data = useStaticQuery(graphql`
    query BgImg {
      desktop: file(relativePath: { eq: "waves-bg.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <S.Section
      Tag="section"
      className={ props.type == 'main' ? 'main' : ''}
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor="#181818"
    >{props.children}
    </S.Section>
  );
};


export default Section;
