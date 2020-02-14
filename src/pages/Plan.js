import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChallengesContext } from '../common/ChallengesContext';
import Button from '../layout/Button';
import { theme } from '../layout/Theme';
import { device } from '../layout/BreakPoints';

const PlanHeader = styled.header`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const CardWarpper = styled.div`
  position: relative;
`;

const Card = styled.div`
  h3 {
    color: ${theme.gray};
  }

  h2 {
    text-transform: capitalize;
    color: ${theme.green};
  }
`;

const SelectedButton = styled.div`
  button {
    padding: 0;
    border: none;
    background: none;
    box-shadow: none;
    color: ${theme.green};
    text-align: left;
    text-transform: initial;
    cursor: default;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.tabletSmall} {
    flex-direction: column;
  }

  a {
    flex-basis: 100%;
  }
  button {
    margin-top: 2rem;
    @media ${device.tabletSmall} {
      width: 100%;
    }
  }
`;

const Plan = () => {
  const { data } = useContext(ChallengesContext);

  const selectedCategory = Object.values(data.list).filter(
    challenge => challenge.checked === true
  );

  const category = selectedCategory
    .map((plan, i) => {
      const { name } = plan;

      return name;
    })
    .toString()
    .toUpperCase();

  const selectedChallenge = selectedCategory
    .map((challenge, i) => challenge.list)
    .map(item => {
      return item
        .filter(currentItem => currentItem.selected)
        .map(currentItem => currentItem);
    });

  const sanitizeString = str =>
    str.split(',') ? str.split(',').join(', ') : str;

  return (
    <Fragment>
      <PlanHeader>
        <h1>Your plan lies here:</h1>
      </PlanHeader>

      <CardWarpper>
        <Card>
          <Fragment>
            <h3> Selected plan includes: </h3>
            <h2>{sanitizeString(category)}</h2>
            <h3> Selected challenges are: </h3>
            <SelectedButton>
              {selectedChallenge &&
                [...selectedChallenge].map(currentItem =>
                  [...currentItem].map((item, i) => (
                    <Button text={`#${item.type}`} key={i} />
                  ))
                )}
            </SelectedButton>

            <h3> Selected duration is: </h3>
            <h2>{data.duration}</h2>

            <ButtonsWrapper>
              <Link to='/'>
                <Button text='edit plan' />
              </Link>
              <Link to='/calendar'>
                <Button text='start plan' />
              </Link>
            </ButtonsWrapper>
          </Fragment>
        </Card>
      </CardWarpper>
    </Fragment>
  );
};

export default Plan;
