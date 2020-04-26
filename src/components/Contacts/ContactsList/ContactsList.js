import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, ondeleteContact }) =>
  contacts.length > 0 ? (
    <ul>
      {contacts.map(({ userName, userPhone, id }) => (
        <li key={id}>
          <span>
            {userName}: {userPhone}
          </span>
          <button type="button" onClick={() => ondeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <h3>You don`t have any contacts</h3>
  );

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      userName: PropTypes.string.isRequired,
      userPhone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  ondeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
