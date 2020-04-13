import React, { useState } from 'react';
import * as S from './contactsection.styled';
import contactOptions from '../../data/contact';
import contactImage from '../../images/contact.svg';
import Form from './Form/form';
import ArrowDown from '../../images/arrowdown.svg';
import { FormArea } from './contactsection.styled';

const ContactSection = () => {
  const [content, setContent] = useState([
    {
      helptext:
        'Escolha uma opção acima ou use o formulário abaixo para entrar em contato!',
      links: [],
    },
  ]);

  return (
    <S.ContactSection id="contact">
      <S.QuestionArea>
        <S.Dropdown>
          <S.DropdownButton>
            DO QUE VOCÊ PRECISA?
            <img src={ArrowDown} alt="" />
          </S.DropdownButton>
          <S.DropdownContent>
            {contactOptions.map((option, index) =>
              <button id={option.id}
                onClick={() => setContent([
                    { helptext: option.helptext, links: option.links },
                  ])
                }
                key={index}
              >
              {option.topic}
            </button>
            )}
          </S.DropdownContent>
        </S.Dropdown>
        {content.map((text, index) => (
          <S.QuestionContent key={index}>
            <S.HelpText>{text.helptext}</S.HelpText>
            <S.LinkContainer>
              {text.links.map((link, index) => (
                <S.Link key={index}>
                  <a id={link.id} className="link" href={link.href}>
                    {link.name}
                  </a>
                </S.Link>
              ))}
            </S.LinkContainer>
          </S.QuestionContent>
        ))}
      </S.QuestionArea>
      <FormArea>


        <Form/>

      </FormArea>
      <S.Image src={contactImage} alt="" />
    </S.ContactSection>
  );
};

export default ContactSection;
