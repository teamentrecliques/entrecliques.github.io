import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import List from './Components/list';
import ListItem from './Components/listitem';
import * as S from './menu.styled';

const Menu = () => {
  const [hover, setHover] = useState(false);

  const data = useStaticQuery(graphql`
    query Test {
      file(relativePath: { eq: "q-icon.png" }) {
        childImageSharp {
          fixed(width: 59, height: 59) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <S.Menu
      className={hover ? 'menu open' : 'menu'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <List>
        <ListItem sectionUrl="#">nos te ajudamos</ListItem>
        <ListItem sectionUrl="#">produtos</ListItem>
        <ListItem sectionUrl="#">clientes</ListItem>
        <ListItem sectionUrl="#">o que fazemos</ListItem>
        <ListItem sectionUrl="#">home</ListItem>
      </List>
      <Img className="logo" fixed={data.file.childImageSharp.fixed} alt="" />
    </S.Menu>
  );
};

export default Menu;
