import React, { createContext, useState } from 'react';
import { habitCategories } from './data';

const ChallengesContext = createContext(habitCategories);

const ChallengesProvider = props => {
  const [data, setData] = useState(habitCategories);

  return (
    <ChallengesContext.Provider value={{ data, setData }}>
      {props.children}
    </ChallengesContext.Provider>
  );
};

export { ChallengesContext, ChallengesProvider };
