import React from 'react';
import ReactDOM from 'react-dom';
import { ChallengesProvider } from './common/ChallengesContext';
import App from './App';

ReactDOM.render(
  <ChallengesProvider>
    <App />
  </ChallengesProvider>,
  document.getElementById('root')
);
