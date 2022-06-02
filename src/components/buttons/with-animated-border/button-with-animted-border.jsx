import React from 'react';
import PropTypes from 'prop-types';
import './button-with-animted-border.css';

/**
 * Primary UI component for user interaction
 */
export const ButtonWithAnimatedBorder = ({ label, onClick }) => {
  return (
    <a class="button-with-animated-border" onClick={onClick}>{label}</a>
  );
};

ButtonWithAnimatedBorder.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ButtonWithAnimatedBorder.defaultProps = {
  onClick: undefined,
};
