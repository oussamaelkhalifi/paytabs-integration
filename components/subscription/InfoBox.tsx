import React from 'react';
import { Text, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import { styles } from './infoBox.styles';

const InfoCircleIcon = () => (
  <Svg width={20} height={20} viewBox='0 0 24 24' fill='none'>
    <Circle cx='12' cy='12' r='10' stroke='#888' strokeWidth={1.5} />
    <Line
      x1='12'
      y1='8'
      x2='12'
      y2='8'
      stroke='#888'
      strokeWidth={2}
      strokeLinecap='round'
    />
    <Line
      x1='12'
      y1='12'
      x2='12'
      y2='16'
      stroke='#888'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </Svg>
);

type Props = {
  boldLabel?: string;
  text: string;
};

export function InfoBox({ boldLabel, text }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <InfoCircleIcon />
      </View>
      <Text style={styles.text}>
        {boldLabel && <Text style={styles.boldLabel}>{boldLabel} </Text>}
        {text}
      </Text>
    </View>
  );
}
