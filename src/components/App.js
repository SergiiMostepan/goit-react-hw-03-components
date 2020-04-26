import React, { Fragment } from 'react';
import 'normalize.css';
import Counter from './Counter/Counter';
import Contacts from './Contacts/Contacts';

const App = () => (
  <Fragment>
    <Counter />
    <Contacts />
  </Fragment>
);

export default App;
