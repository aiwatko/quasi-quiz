import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../materials/colors';

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${colors.white};
  font-weight: 800;
  font-size: calc(20px + 8vw);
  
  ${(props) => props.variant === 'default'
  && `border: 2px solid ${colors.black};`
}
  
  ${(props) => props.variant === 'correct'
  && `border: 2px solid ${colors.green};
      background-color: ${colors.green};
      color: ${colors.white};`
}

  ${(props) => props.variant === 'incorrect'
  && `border: 2px solid ${colors.red};
      color: ${colors.red};
      background-image: radial-gradient(${colors.red} 15%, transparent 15%);
      background-position: 0 0, 10px 10px;
      background-size: 5px 5px;`
}
`;

const Input = styled.input.attrs({ type: 'radio' })`
  display: none;
  
  &:disabled ~ label {
    border: 2px solid ${colors.gray};
    color: ${colors.gray};
  }
  
  &:checked ~ label {
    background-image: radial-gradient(${colors.black} 15%, transparent 15%);
    background-position: 0 0, 10px 10px;
    background-size: 5px 5px;
  }
`;

export const InputRadio = ({
  value, name, disabled, variant, onClick,
}) => (
  <div>
    <Input name={name} id={value} disabled={disabled} onClick={onClick} value={value} />
    <Label htmlFor={value} variant={variant}><span>{value}</span></Label>
  </div>
);

InputRadio.defaultProps = {
  disabled: false,
  variant: 'default',
};

InputRadio.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['correct', 'incorrect', 'default']),
};
