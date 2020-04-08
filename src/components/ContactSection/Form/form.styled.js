import styled from 'styled-components';

export const FormContainer = styled.div`
  border: 1px solid ${props => props.theme.primary};
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h3 {
    color: ${props => props.theme.primary};
    font-size: 1.5rem;
    line-height: 120%;
  }

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0;
  }

  form input {
    border: 0;
    border-bottom: 2px solid rgba(255, 200, 19, 1);
    background-color: transparent;
    color: #fff;
    font-size: .8rem;
    outline: 0;
    padding: .25rem;
    transition: border-color 300ms ease;
    width: 100%;
  }

  form input:not(:last-of-type) {
    margin: 0 0 1.6rem 0;
  }

  form input:focus::placeholder {
    color: rgba(255, 200, 19, 0);
  }

  form input::placeholder {
    color: rgba(255, 200, 19, 1);
    transition: color 400ms;
    will-change: color;
  }

  form button {
    font-size: 0.8rem;
    align-self: flex-end;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
