import React from 'react';
import PropTypes from 'prop-types';

function Header({ location }) {
  return (
    <header className="d-flex justify-content-between align-items-center mt-4">
      <h1 id="title">
        Weather Display
      </h1>
      <form onSubmit={location}>
        <input type="text" name="country" />
        <input type="submit" />
      </form>
    </header>
  );
}

export default Header;

Header.defaultProps = {
  location: {},
};
Header.propTypes = {
  location: PropTypes.func,
};
