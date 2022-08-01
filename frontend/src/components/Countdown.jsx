import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { disablePlayerButtons } from '../ws/actions';
import { Context } from '../App';

export const Countdown = ({ time }) => {
  const [counter, setCounter] = useState(time);
  const [context] = useContext(Context);

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      disablePlayerButtons(context);
    }
  }, [counter]);

  return (
    <span>{counter}</span>
  );
};

Countdown.propTypes = {
  time: PropTypes.number.isRequired,
};
