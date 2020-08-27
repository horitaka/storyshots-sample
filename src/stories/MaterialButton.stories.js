import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import MaterialButton from '../MaterialButton'

export default {
  title: 'MaterialButton',
  component: MaterialButton,
};

export const Button = () => (
  <MaterialButton text="Button"/ >
);

export const ButtonExcluedsnapshot = () => (
  <MaterialButton text="Button Excluedsnapshot"/ >
);
