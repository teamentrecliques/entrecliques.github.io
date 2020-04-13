import React from 'react';
import * as S from './loader.styled';

const Loader = ({ visible }) => <S.Loader className={`${visible ? "--visible" : ""}`} />;

export default Loader;
