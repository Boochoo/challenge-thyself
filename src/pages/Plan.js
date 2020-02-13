import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChallengesContext } from '../common/ChallengesContext';
import Button from '../layout/Button';

const PlanHeader = styled.header`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const CardWarpper = styled.div`
  display: flex;
  position: relative;
  padding: 4rem;
  margin: 1rem 2rem;
  /* background: var(--green-bg); */
  /* border-radius: var(--border-radius); */
  /* max-width: 450px; */

  transform: translateZ(0);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  /* box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5); */

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.75rem;
    border-radius: 50%;
    left: 0;
    bottom: -3rem;
  }
`;

const Card = styled.div`
  padding: 2rem 3rem;
  transform-style: preserve-3d;
  /* color: var(--white); */

  h3 {
    color: #212121;
  }

  h2 {
    text-transform: capitalize;
    color: var(--dark-color);
  }

  button {
    margin-top: 2rem;
    background: none;
    color: var(--bg-color);

    &:hover {
      background: var(--bg-color);
      color: var(--white);
    }
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
    .map((el, i) => {
      const filteredChallenge = el.filter(currentItem => currentItem.selected);

      return filteredChallenge.map((currentItem, inex) => (
        <Fragment>
          <Button text={currentItem.type} key={inex} id={inex} />
        </Fragment>
      ));
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
            {selectedChallenge}

            <h3> Selected duration is: </h3>
            <h2>{data.duration}</h2>

            <ButtonsWrapper>
              <Link to='/'>
                <Button key='asdf' text='edit plan' />
              </Link>
              <Button text='start plan' key='asasaaa' />
            </ButtonsWrapper>
          </Fragment>
        </Card>
      </CardWarpper>
    </Fragment>
  );
};

export default Plan;
