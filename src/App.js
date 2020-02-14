import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { device } from './layout/BreakPoints';
import Plan from './pages/Plan';
import { ChallengesContext } from './common/ChallengesContext';
import ChallengeCategoriesComponent from './components/ChallengeCategoriesComponent';
import ChallengeLists from './components/ChallengeLists';
import ChallengeFrequency from './components/ChallengeFrequency';
import { theme } from './layout/Theme';
import Button from './layout/Button';
import Calendar from './pages/Calendar';

const gap = props => props.theme.gapSize;

const AppWrapper = styled.div`
  padding-left: ${gap};
  padding-right: ${gap};
  margin-bottom: ${gap};
`;

const AppNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  margin-top: 2rem;

  a {
    margin-left: ${gap};
    @media ${device.tablet} {
      margin: 0 auto;
      text-align: center;
    }
  }
`;

const Line = styled.span`
  width: 100%;
  margin-top: 1rem;
  border-bottom: 0.15rem solid ${props => props.theme.green};
`;

const Logo = styled.h1`
  position: relative;
  padding: 0.2rem 1.25rem;
  font-size: 2.5rem;
  background-color: ${props => props.theme.yellow};
  color: ${props => props.theme.black};
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.7);
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font: 1.5rem "Lato", Arial, sans-serif;
    line-height: 2;
    color: ${props => props.theme.gray};
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }
`;

function App() {
  const { data } = useContext(ChallengesContext);

  const hasSelected = [...Object.values({ ...data.list })]
    .map(({ list }) => {
      return list.some(el => {
        return el && el.selected;
      });
    })
    .filter(el => el);

  const handleRoute = () => {};
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppNav>
          <Link to='/'>
            <Logo>Challenge Thyself</Logo>
          </Link>

          <Line />
        </AppNav>
        <AppWrapper>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <ChallengeCategoriesComponent />
                  <ChallengeLists />

                  {hasSelected.length > 0 && (
                    <Fragment>
                      <ChallengeFrequency />
                      {data.duration.length > 0 && (
                        <Link to='/plan'>
                          <Button onClick={handleRoute} text={`see plan`} />
                        </Link>
                      )}
                    </Fragment>
                  )}
                </Fragment>
              )}
            />
            <Route exact path='/plan' component={Plan} />
            <Route exact path='/calendar' component={Calendar} />
          </Switch>
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
