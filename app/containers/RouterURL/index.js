import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../HomePage';
import Contact from '../Contact';
import User from '../User';

export default function RouterURL() {
  // eslint-disable-next-line prettier/prettier
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={Contact} />
      <Route path="/user" component={User} />
    </div>
  );
}
