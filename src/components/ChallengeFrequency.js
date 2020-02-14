import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';
import RadioButton from '../layout/RadioButton';
import { ChallengesContext } from '../common/ChallengesContext';

const FrequencyContainer = styled.div`
  margin-bottom: 2.5rem;

  h3 {
    margin-bottom: 1rem;
  }
`;

const ChallengeFrequency = () => {
  const { data, setData } = useContext(ChallengesContext);

  const handleChange = event => {
    data.duration = event.currentTarget.value;

    setData(() => ({
      ...data
    }));
  };

  const setId = value => {
    const v = value.toLowerCase();
    return v.includes(' ') ? v.split(' ').join('-') : v;
  };

  return (
    <Fragment>
      <FrequencyContainer>
        <h3>
          Select how often you want to take part in the selected challenge:
        </h3>

        {data.frequency.map((value, i) => (
          <RadioButton
            id={setId(value)}
            value={value}
            label={value}
            key={i}
            checked={value === data.duration}
            onChange={handleChange}
          />
        ))}
      </FrequencyContainer>
    </Fragment>
  );
};

export default ChallengeFrequency;
