import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { endQuestion } from '../ws/actions'
import { Context } from '../App'

export function Countdown({ time }) {
  const [counter, setCounter] = useState(time)
  const [context] = useContext(Context)

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000)
    } else {
      endQuestion(context)
    }
  }, [counter])

  return (
    <span>{counter}</span>
  )
}

Countdown.propTypes = {
  time: PropTypes.number.isRequired,
}
