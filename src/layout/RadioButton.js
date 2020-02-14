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
  border: 0;
  white-space: nowrap;
  overflow: hidden;
`;

const RadioButtonText = styled.span`
  height: 7rem;
  width: 7rem;
  border: 0.1 solid ${theme.gray};
  text-transform: capitalize;
`;

const RadioButtonLabel = styled.label`  
  height: 9rem;
  width: 9rem;
  margin: 0 1.5rem 0;
  border: 0.075rem solid ${theme.gray};

  ${HiddenButtonRadio} + ${RadioButtonText} {
    border: 0.1rem solid ${theme.gray};
    color: ${theme.gray}
  }
  ${HiddenButtonRadio}:checked + ${RadioButtonText} {
    border: 0.1rem solid ${theme.green};
    background: ${theme.green};
    color: ${theme.white};
    transition: all 250ms ease-in-out
  }
`;

const customStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: '50%',
  cursor: 'pointer'
};

const RadioButton = ({ value, id, checked, onChange }) => (
  <RadioButtonLabel htmlFor={id} style={customStyles}>
    <HiddenButtonRadio
      id={id}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <RadioButtonText style={customStyles}>{value}</RadioButtonText>
  </RadioButtonLabel>
);
export default RadioButton;
