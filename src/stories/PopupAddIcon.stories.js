import React from 'react';
import PopupAddIcon from '../PopupAddIcon'

export default {
  title: 'PopupAddIcon',
  component: PopupAddIcon,
};

export const Icon = () => (
  <div>
    <PopupAddIcon left={0} top={0} open />
  </div>
);
export const FloatIcon = () => (
  <div>
    <PopupAddIcon left={30} top={30} open />
  </div>
);
