import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ChallengesContext } from '../common/ChallengesContext';
import { theme } from '../layout/Theme';

const CheckboxWrapper = styled.div`
  display: flex;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  border: 0;
  opacity: 0;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: ${({ checked }) => (checked ? `${theme.green}` : '#fff')};
  border: 1px solid ${theme.gray};
  border-radius: 50%;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
`;

const ChallengeListComponent = ({ name, checked }) => {
  const [status, setStatus] = useState(checked);
  const { data, setData } = useContext(ChallengesContext);

  const onChange = () => {
    setStatus(!status);

    [...Object.values(data.list)]
      .filter(list => {
        return list.checked;
      })
      .map(({ list }) => {
        const mappedList = [...list].filter(item => {
          return item.type === name;
        });

        mappedList.forEach(item => {
          item.selected = !status;
        });

        return mappedList;
      });

    setData({
      ...data
    });
  };

  return (
    <CheckboxWrapper>
      <HiddenCheckbox onChange={onChange} name={name} checked={status} />
      <StyledCheckbox checked={status}></StyledCheckbox>
    </CheckboxWrapper>
  );
};

ChallengeListComponent.protoType = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ChallengeListComponent;
