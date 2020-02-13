import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { device } from './layout/BreakPoints';
import Plan from './pages/Plan';

const theme = {
  black: '#333',
  creamWhite: '#f4f4f4',
  darkBlue: '#222831',
  yellow: '#efbb35',
  lightGreen: '#00a6a2',
  blue: '#002f6c',
  gray: '#737373',
  white: '#fff',
  borderRadius: '0.2rem',
  gapSize: '3rem'
};

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
  border-bottom: 0.15rem solid ${props => props.theme.lightGreen};
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
            <Route exact path='/' />
            <Route exact path='/plan' component={Plan} />
          </Switch>
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
