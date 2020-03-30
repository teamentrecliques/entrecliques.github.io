import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import * as S from './styled';

const MainSectionTitle = () => (
  <S.Container>
    <S.TopText>está buscando os</S.TopText>
    <S.StrongText className="secondary">Melhores</S.StrongText>
    <S.StrongText>Resultados</S.StrongText>
    <S.RegularText>Online?</S.RegularText>
  </S.Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainSectionTitle;
