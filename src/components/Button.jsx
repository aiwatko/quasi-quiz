import styled from 'styled-components';
import { colors } from '../materials/colors';

export const Button = styled.button`
    border: 2px solid black;
    background-color: white;
    font-size: 30px;
    
    &:disabled {
      border: 2px solid ${colors.gray};
      color: ${colors.gray};
    }
    
    &:focus {
        background-image: radial-gradient(${colors.black} 15%, transparent 15%);
        background-position: 0 0, 10px 10px;
        background-size: 5px 5px;
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
