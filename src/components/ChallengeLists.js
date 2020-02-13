import React, { useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../common/ChallengesContext';
import { device } from '../layout/BreakPoints';
import ChallengeListComponent from './ChallengeListComponent';

const ListContainer = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  h3 {
    margin-bottom: 0.5rem;
  }
`;

const CheckboxContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.tabletSmall} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LabelText = styled.span`
  margin-left: 0.5rem;
  text-transform: capitalize;
`;

const ChallengeLists = () => {
  const { data } = useContext(ChallengesContext);

  return (
    <ListContainer>
      <h3>List of challenges</h3>
      <CheckboxContainer>
        {Object.values(data.list).map(
          category =>
            category.checked &&
            Object.values(category.list).map((challenge, i) => (
              <Label key={i}>
                <ChallengeListComponent
                  checked={Boolean(challenge.selected)}
                  name={challenge.type}
                />

                <LabelText>{challenge.type}</LabelText>
              </Label>
            ))
        )}
      </CheckboxContainer>
    </ListContainer>
  );
};

export default ChallengeLists;
