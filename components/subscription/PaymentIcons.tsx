import React from 'react';
import Svg, { Path, Polyline, Rect } from 'react-native-svg';

export const BackArrow = () => (
  <Svg width={24} height={24} viewBox='0 0 24 24' fill='none'>
    <Path
      d='M19 12H5M12 5l-7 7 7 7'
      stroke='#000'
      strokeWidth={1.8}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export const CheckIcon = () => (
  <Svg width={18} height={18} viewBox='0 0 24 24' fill='none'>
    <Polyline
      points='20,6 9,17 4,12'
      stroke='#000'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export const SSLIcon = () => (
  <Svg width={36} height={36} viewBox='0 0 24 24' fill='none'>
    <Path
      d='M12 2L4 5v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V5l-8-3z'
      fill='#4CAF50'
      stroke='#388E3C'
      strokeWidth={0.5}
    />
    <Polyline
      points='8,12 11,15 16,9'
      stroke='#fff'
      strokeWidth={1.8}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export const PCIIcon = () => (
  <Svg width={36} height={36} viewBox='0 0 24 24' fill='none'>
    <Rect x='2' y='5' width='20' height='14' rx='2' fill='#1565C0' />
    <Path d='M2 9h20' stroke='#FDD835' strokeWidth={1.5} />
    <Path
      d='M5 14h3M10 14h2'
      stroke='#fff'
      strokeWidth={1}
      strokeLinecap='round'
    />
  </Svg>
);

export const SecureIcon = () => (
  <Svg width={36} height={36} viewBox='0 0 24 24' fill='none'>
    <Path
      d='M12 2L4 5v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V5l-8-3z'
      fill='#1565C0'
      stroke='#0D47A1'
      strokeWidth={0.3}
    />
    <Path
      d='M9 12l2 2 4-4'
      stroke='#fff'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
