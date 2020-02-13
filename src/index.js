import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChallengesProvider } from './common/ChallengesContext';

ReactDOM.render(
  <ChallengesProvider>
    <App />
  </ChallengesProvider>,
  document.getElementById('root')
);
