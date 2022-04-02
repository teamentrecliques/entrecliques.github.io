import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../Layout';
import * as S from './mainsectiontitle.styled';

const MainSectionTitle = () => (
  <S.Container>
    <S.TopText>está buscando</S.TopText>
    <S.StrongText className="secondary">Melhorar</S.StrongText>
    <S.MidText>Sua presença</S.MidText>
    <S.SmallText>Online?</S.SmallText>
  </S.Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainSectionTitle;
