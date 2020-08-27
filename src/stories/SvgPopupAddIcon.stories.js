import React from 'react';
import SvgPopupAddIcon from '../SvgPopupAddIcon'

export default {
  title: 'SvgPopupAddIcon',
  component: SvgPopupAddIcon,
};

export const Icon = () => (
  <svg>
    <SvgPopupAddIcon left={0} top={0} open={true} />
    <SvgPopupAddIcon left={0} top={50} open={true} />
    <SvgPopupAddIcon left={50} top={50} open={false} />
    <SvgPopupAddIcon left={50} top={0} open={true} disabled={true}/>
  </svg>
);
