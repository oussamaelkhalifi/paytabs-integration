import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export const ProfileIcon = () => (
  <Svg width={22} height={22} viewBox='0 0 24 24' fill='none'>
    <Path
      d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'
      stroke='#1976D2'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Circle cx='12' cy='7' r='4' stroke='#1976D2' strokeWidth={2} />
  </Svg>
);

export const HouseIcon = () => (
  <Svg width={22} height={22} viewBox='0 0 24 24' fill='none'>
    <Path
      d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
      stroke='#1976D2'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M9 22V15h6v7'
      stroke='#1976D2'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export const MapIcon = () => (
  <Svg width={22} height={22} viewBox='0 0 24 24' fill='none'>
    <Path
      d='M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z'
      stroke='#1976D2'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M8 2v16M16 6v16'
      stroke='#1976D2'
      strokeWidth={2}
      strokeLinecap='round'
    />
    <Path
      d='M13 9l2-2'
      stroke='#1976D2'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </Svg>
);

export const UsersIcon = () => (
  <Svg width={22} height={22} viewBox='0 0 24 24' fill='none'>
    <Path
      d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'
      stroke='#1976D2'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Circle cx='9' cy='7' r='4' stroke='#1976D2' strokeWidth={2} />
    <Path
      d='M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75'
      stroke='#1976D2'
      strokeWidth={2}
      strokeLinecap='round'
    />
  </Svg>
);
