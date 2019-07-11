/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
// import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
// eslint-disable-next-line import/no-unresolved
import Header from 'components/Header';
import Footer from 'components/Footer';
// eslint-disable-next-line import/no-unresolved
import { Route } from 'react-router-dom';
import RouterURL from '../RouterURL';
// import HomePage from '../HomePage';
// eslint-disable-next-line import/no-useless-path-segments
// import Table from '../HomePage/Table';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Route>
      <Header />
      {/* <HomePage /> */}
      <RouterURL />
      <Footer />
      {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch> */}
      <GlobalStyle />
    </Route>
  );
}
