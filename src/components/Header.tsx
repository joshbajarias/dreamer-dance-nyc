import React from 'react';
import PropTypes from 'prop-types';

interface HeaderProps {
  label?: string;
}

const Header: React.FC<HeaderProps> = ({ label = 'Welcome to Dreamer Dance NYC' }) => {
  return (
    <header>
      <h1>{label}</h1>
    </header>
  );
};

Header.propTypes = {
  label: PropTypes.string,
};

export default Header;
