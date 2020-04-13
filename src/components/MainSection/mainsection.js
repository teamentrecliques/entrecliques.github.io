import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './mainsection.styled';

const MainSection = props => {
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
    <S.MainSection
      id={props.id}
      Tag="section"
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor="#181818"
    >{props.children}
    </S.MainSection>
  );
};


export default MainSection;
