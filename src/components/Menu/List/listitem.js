import React from 'react';
import PropTypes from 'prop-types';
import * as S from './listitem.styled';

const ListItem = props => (
  <S.Item>
    <S.Link data-anchor={props.anchor} href={props.sectionUrl}>{props.children}</S.Link>
  </S.Item>
);

ListItem.propTypes = {
  sectionUrl: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ListItem;
