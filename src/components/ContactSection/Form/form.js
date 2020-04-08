import React from 'react';
import Button from '../../Button/button';
import * as S from './form.styled';

const Form = () => {
  return (
    <S.FormContainer>
      <h3>Contato</h3>
      <form id="subscribe-form">
        <input name="name" placeholder="Seu nome" type="text" required />
        <input name="email" placeholder="Seu email" type="email" required />
        <input name="msg" placeholder="Como podemos te ajudar?" type="text" required />
        <Button type="submit">Enviar</Button>
      </form>
    </S.FormContainer>
  );
};

export default Form;
