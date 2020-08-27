import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import { default as AddIcon } from '@material-ui/icons/Add';


const PopupDiv = styled.div.attrs(({ left, top }) => ({
  style: {
    left: `${left}px`,
    top: `${top}px`,
  },
}))`
  line-height: 1;
  pointer-events: auto;
  position: absolute;
  z-index: 3;
`;

const MyButton = styled(Button)`
  background-color: #ffffff !important;
  border-radius: 4px !important;
  border: 1px solid #d8dfe2 !important;
  height: 16px !important;
  width: 16px !important;
  min-height: 16px !important;
  min-width: 16px !important;
  padding: 0px !important;
  &:hover {
    background-color: #ebebeb !important;
  }
  &:focus {
    outline: none;
  }
  & svg {
    height: inherit !important;
    width: inherit !important;
  }
`;

const stopPropagation = e => e.stopPropagation();

const PopupAddIcon = props => {
  const { left, top, open, disabled, onClick, innerRef } = props;

  return (
    <PopupDiv left={left} top={top}>
      <Fade in={open}>
        <MyButton disabled={disabled} onClick={onClick} onMouseDown={stopPropagation} innerRef={innerRef}>
          <AddIcon color={disabled ? "disabled" : "secondary"} />
        </MyButton>
      </Fade>
    </PopupDiv>
  );
};

export default PopupAddIcon;
