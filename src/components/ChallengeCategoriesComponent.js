import React, { useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../common/ChallengesContext';
import CategoryComponent from './CategoryComponent';

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ChallenegCategoriesComponent = () => {
  const { data } = useContext(ChallengesContext);
  return (
    <CategoriesContainer>
      {Object.values(data.list).map((category, index) => (
        <CategoryComponent
          selected={category.checked}
          collection={category.list}
          label={category.name}
          key={index}
        />
      ))}
    </CategoriesContainer>
  );
};

export default ChallenegCategoriesComponent;
