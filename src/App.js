import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import About from './About';
import Links from './Links';

const NavBar = styled.div`
  display: flex;
  margin-bottom: 1em;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 1em;

  &.active {
    border-bottom: 4px solid red;
  }
`;

export default function App() {
  return (
    <Router>
      <NavBar>
        <StyledLink exact to="/">
          Home
        </StyledLink>
        <StyledLink exact to="/about">
          About
        </StyledLink>
        <StyledLink exact to="/links">
          Links
        </StyledLink>
      </NavBar>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/links" exact>
          <Links />
        </Route>
        <Route path="*">404 fucker</Route>
      </Switch>
    </Router>
  );
}
