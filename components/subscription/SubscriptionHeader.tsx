import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { styles } from './subscriptionHeader.styles';

const BackArrow = () => (
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

type Props = {
  title: string;
  onBack?: () => void;
  withGoBack?: boolean;
};

export function SubscriptionHeader({
  title,
  onBack,
  withGoBack = true,
}: Props) {
  return (
    <View style={styles.header}>
      {withGoBack && (
        <TouchableOpacity
          onPress={onBack}
          style={styles.backButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <BackArrow />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.spacer} />
    </View>
  );
}
