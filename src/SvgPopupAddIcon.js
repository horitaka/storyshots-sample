import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';

const StyledG = styled.g`
  background-color: #ffffff !important;
  pointer-events: bounding-box;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const stopPropagation = e => e.stopPropagation();

const SvgPopupAddIcon = (props) => {
  const { left, top, open, disabled, onClick, innerRef } = props;
  const [isHover, setIsHover] = useState(false)
  const theme = useTheme();

  if (!open) {
    return (<></>)
  }

  return (
    <StyledG
      transform={`translate(${left},${top})`}
      onClick={onClick}
      onMouseDown={stopPropagation}
      onMouseEnter={() => setIsHover(true) }
      onMouseLeave={() => setIsHover(false)}
      innerRef={innerRef}
    >
      <rect
        x="0" y="0"
        rx="4" ry="4"
        width="16" height="16"
        fill={isHover ? "#ebebeb" : "none"}
        stroke="#d8dfe2" strokeWidth="1"
      />
      <path
        d="M4,8 h8 M8,4 v8"
        strokeWidth="1"
        stroke={disabled ? theme.palette.action.disabled : theme.palette.secondary.main}
      />
    </StyledG>
  );
}

export default SvgPopupAddIcon;
