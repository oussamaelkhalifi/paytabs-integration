import React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import { styles } from './successHero.styles';

type Props = {
  source: ImageSourcePropType;
};

export function SuccessHero({ source }: Props) {
  return (
    <View style={styles.banner}>
      <Image source={source} style={styles.image} resizeMode='cover' />
    </View>
  );
}
