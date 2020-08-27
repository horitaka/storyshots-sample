import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import StyledButton from '../StyledButton'

export default {
  title: 'StyledButton',
  component: StyledButton,
};

export const Button = () => (
  <StyledButton>
    Button
  </StyledButton>
);

export const ButtonExcluedsnapshot = () => (
  <StyledButton>
    Button Excluedsnapshot
  </StyledButton>
);
