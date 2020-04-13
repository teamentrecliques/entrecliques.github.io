import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import List from './List/list';
import ListItem from './List/listitem';
import * as S from './menu.styled';

const Menu = () => {
  const [hover, setHover] = useState(false);

  const data = useStaticQuery(graphql`
    query QLogo {
      file(relativePath: { eq: "q-icon.png" }) {
        childImageSharp {
          fixed(width: 59, height: 59) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <S.Menu
      className={hover ? 'menu open' : 'menu'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <List>
        <ListItem sectionUrl="#contact" anchor="contact">nós te ajudamos</ListItem>
        <ListItem sectionUrl="#products" anchor="products">produtos</ListItem>
        <ListItem sectionUrl="#services" anchor="services">o que fazemos</ListItem>
        <ListItem sectionUrl="#home" anchor="home">home</ListItem>
      </List>
      <Img className="logo" fixed={data.file.childImageSharp.fixed} alt="" />
    </S.Menu>
  );
};

export default Menu;
