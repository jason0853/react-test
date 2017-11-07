import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ number, onIncrement }) => {
  return (
    <div>
      { number }
      <button onClick={ onIncrement }>+</button>
    </div>
  );
};


Counter.propTypes = {
  number: PropTypes.number.isRequired,
  onIncrement: PropTypes.func
};

Counter.defaultProps = {
  number: 0,
  onIncrement: () => console.warn('onIncrement not defined')
};

export default Counter;