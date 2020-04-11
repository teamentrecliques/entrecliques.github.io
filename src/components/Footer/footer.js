import React from 'react';
import * as S from './footer.styled';
import etcLogo from '../../images/etc-logo-white.svg';
import Icon from '../../images/icons';

const Footer = () => (
  <S.Footer>
    <div>
      <S.Img src={etcLogo} />
      <S.AddressContainer>
        <p>
          Alameda Lorena, 514-B
          <br />
          Jardim Paulista, São Paulo - SP 01424-00
          <br />
          01424-002
        </p>
        <p>
          R. Padre Albuquerque, 1111 - 1º Andar
          <br />
          Centro, Itapetininga - SP
          <br />
          18200-075
        </p>
      </S.AddressContainer>
      <S.SocialContainer>
        <a href="#">
          <img src={Icon.facebook} alt="" />
        </a>
        <a href="#">
          <img src={Icon.instagram} alt="" />
        </a>
        <a href="#">
          <img src={Icon.whatsapp} alt="" />
        </a>
        <a href="#">
          <img src={Icon.likedin} alt="" />
        </a>
        <p>(15) 3527-2005 | (11) 94858-3630</p>
      </S.SocialContainer>
    </div>
    <div>
      <S.MapContainer>
        <S.MapIframe src="https://www.google.com/maps/d/u/0/embed?mid=19iE1VWBzkIxPxjQbMOwM-Tb86_K985KZ"></S.MapIframe>
      </S.MapContainer>
    </div>
  </S.Footer>
);

export default Footer;
