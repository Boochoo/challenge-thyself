import React from 'react';
import styled from 'styled-components';
import { theme } from './Theme';

const ButtonElement = styled.button.attrs({
  className: ''
})`
  margin: 0.75rem;
  font-size: 2rem;
  border: none;
  outline: 0;
  padding: 1.5rem;
  border-radius: 0.1rem;
  background-color: ${theme.darkBlue};
  color: ${theme.white};
  font-family: inherit;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  box-shadow: 0 0 0.25rem rgba(23, 34, 23, 2);
  cursor: pointer;

  &:hover {
    background-color: ${theme.green};
    color: ${theme.black};
    transition: all 400ms ease-in-out;
  }
`;

const Button = ({ text }) => {
  return <ButtonElement>{text}</ButtonElement>;
};

export default Button;
