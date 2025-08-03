import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

export const PhotoLibraryIcon: React.FC<Props> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11.5-6l2.5 3.01L16.5 10l4.5 6H8l2.5-3.99zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>
  </Svg>
);
