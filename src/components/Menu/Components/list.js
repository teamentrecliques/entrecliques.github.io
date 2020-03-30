import React from 'react';
import PropTypes from 'prop-types';
import * as S from './list.styled';

const List = ({ children }) => <S.List>{children}</S.List>;

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
