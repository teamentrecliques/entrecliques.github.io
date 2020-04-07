import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import * as S from './card.styled';

const Card = props => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const match = useMemo(() =>
    data.allFile.edges.find(({ node }) => props.image === node.relativePath),
  );

  return (
    <S.Card>
      <p className="see-more">Ver mais [+]</p>
      <BackgroundImage tag="div" className="image" fluid={match.node.childImageSharp.fluid} />
    </S.Card>
  );
};

export default Card;
