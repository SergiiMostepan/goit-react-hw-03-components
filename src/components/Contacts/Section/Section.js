import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Section = ({ children }) => (
  <Fragment>
    <div>{children}</div>
  </Fragment>
);

Section.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Section;
