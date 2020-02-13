import React from 'react';
import styled from 'styled-components';
import { theme } from './Theme';

const ButtonElement = styled.button.attrs({
  className: 'btn btn-default'
})`
  text-align: left;
  font-size: 2rem;

  margin: 0.75rem;
  text-align: center;
  padding: 1.5rem;
  outline: 0;
  border: none;
  font-family: inherit;
  border-radius: 0.1rem;
  font-weight: 800;
  text-transform: uppercase;
  color: ${theme.white};
  box-shadow: 0 0 0.25rem rgba(23, 34, 23, 2);
  cursor: pointer;
  background-color: ${theme.darkBlue};

  cursor: pointer;
  box-shadow: 0 0 0.25rem rgba(23, 34, 23, 2);
`;

const Button = ({ text }) => {
  return <ButtonElement>{text}</ButtonElement>;
};

export default Button;
