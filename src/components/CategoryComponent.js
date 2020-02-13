import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../common/ChallengesContext';
import { device } from '../layout/BreakPoints';
import { theme } from '../layout/Theme';

const CategoryButton = styled.div`
  flex-basis: 17%;
  width: 0;
  margin: 0.75rem;
  text-align: center;

  padding: 1.5rem 0;
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

  &.selected {
    background-color: ${theme.green};
  }

  &:hover {
    background-color: ${theme.green};
    transition: all 400ms ease-in-out;
  }

  @media ${device.laptop} {
    flex-basis: 30%;
  }

  @media ${device.tabletSmall} {
    flex-basis: 40%;
  }

  @media ${device.mobileLarge} {
    flex-basis: 100%;
  }
`;

const CategoryComponent = props => {
  const { data, setData } = useContext(ChallengesContext);
  const { label, selected } = props;
  const [toggleState, setToggleState] = useState(selected);
  const [checked, setChecked] = useState(selected);

  const active = toggleState === false ? '' : 'selected';

  const selectCategory = e => {
    e.preventDefault();

    setToggleState(!toggleState);
    setChecked(!checked);

    [...Object.values(data.list)].forEach(data => {
      if (data.name === label) {
        data.checked = !data.checked;
      }
    });

    setData(() => ({ ...data }));
  };

  return (
    <CategoryButton
      checked={checked}
      onClick={selectCategory}
      className={active}
    >
      {label}
    </CategoryButton>
  );
};

export default CategoryComponent;
