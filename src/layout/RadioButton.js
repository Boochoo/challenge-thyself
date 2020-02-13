import React from 'react';
import styled from 'styled-components';
import { theme } from './Theme';

const HiddenButtonRadio = styled.input.attrs({
  type: 'radio',
  name: 'frequency'
})`
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  white-space: nowrap;
  border: 0;
  overflow: hidden;
`;

const RadioButtonText = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 7rem;
  width: 7rem;
  border: 0.1 solid ${theme.gray};
  border-radius: 50%;
  text-transform: capitalize;
`;

const RadioButtonLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 9rem;
  width: 9rem;
  margin: 0 1.5rem 0;
  border: 0.075rem solid ${theme.gray};
  border-radius: 50%;
  cursor: pointer;

  ${HiddenButtonRadio} + ${RadioButtonText} {
    border: 0.1rem solid ${theme.gray};
    color: var(--gray)
  }
  ${HiddenButtonRadio}:checked + ${RadioButtonText} {
    border: 0.1rem solid ${theme.green};
    background: ${theme.green};
    color: ${theme.white};
    transition: all 250ms ease-in-out
  }
`;

const RadioButton = ({ value, id, checked, onChange }) => (
  <RadioButtonLabel htmlFor={id}>
    <HiddenButtonRadio
      id={id}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <RadioButtonText>{value}</RadioButtonText>
  </RadioButtonLabel>
);
export default RadioButton;
