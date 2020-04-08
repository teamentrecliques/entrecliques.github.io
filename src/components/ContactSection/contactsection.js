import React, {useState} from 'react';
import * as S from './contactsection.styled';
import contactOptions from '../../data/contact';
import contactImage from '../../images/contact.svg';
import Form from './Form/form';

const ContactSection = () => {
  const [content, setContent] = useState([{ helptext: 'Escolha uma opção ao lado ou use o formulário para entrar em contato!', links: [] }]);

  return (
    <S.ContactSection>
      <div className="flex-div">
        <S.Dropdown>
          <button className="dropbtn">DO QUE VOCÊ PRECISA?</button>
          <div className="dropdown-content">
            {contactOptions.map((option, index) =>
              <button
                onClick={() => setContent([
                    { helptext: option.helptext, links: option.links },
                  ])
                }
                key={index}
              >
              {option.topic}
            </button>
            )}
          </div>
        </S.Dropdown>
        <S.Image src={contactImage} alt="" />
      </div>
      <div className="flex-div">
        {content.map(text => (
          <S.ContactContent>
            <S.HelpText className="help-text">{text.helptext}</S.HelpText>
            <S.LinkContainer>
              {text.links.map(link => (
                <S.Link>
                  <a className="link" href={link.href}>
                    {link.name}
                  </a>
                </S.Link>
              ))}
            </S.LinkContainer>
          </S.ContactContent>
        ))}
        <Form/>
      </div>
    </S.ContactSection>
  );
};

export default ContactSection;
