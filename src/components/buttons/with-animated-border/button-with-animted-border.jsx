import React from 'react';
import PropTypes from 'prop-types';
import './button-with-animted-border.css';

/**
 * Primary UI component for user interaction
 */
export const ButtonWithAnimatedBorder = ({ label, color, onClick }) => {
  return (
    <a class="button-with-animated-border" style={{ color, borderColor: color}} onClick={onClick}>{label}</a>
  );
};

ButtonWithAnimatedBorder.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,

  /**
   * The color of the borders and the text
   */
  color: PropTypes.string,
  
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ButtonWithAnimatedBorder.defaultProps = {
  color: '#1fe8b6',
  onClick: undefined,
};
