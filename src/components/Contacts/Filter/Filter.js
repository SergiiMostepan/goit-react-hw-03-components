import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => (
  <div>
    <span> Find contacts by name </span>
    <input
      type="text"
      name="filter"
      value={value}
      onChange={onChangeFilter}
      placeholder="Type to filter tasks..."
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
