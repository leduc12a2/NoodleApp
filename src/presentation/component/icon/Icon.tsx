import React from 'react';
import {SVG} from '@assets';

export const IconSVG = (props: {
  name: keyof typeof SVG;
  size?: number;
  color?: string;
}) => {
  const {name, size, color} = props;
  const Icon = SVG[name];
  return <Icon width={size} height={size} fill={color} />;
};
